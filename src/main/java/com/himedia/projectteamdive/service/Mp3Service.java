package com.himedia.projectteamdive.service;

import com.himedia.projectteamdive.dto.OrderMusicRequestDto;
import com.himedia.projectteamdive.dto.PurchasedMusicResponseDto;
import com.himedia.projectteamdive.entity.*;
import com.himedia.projectteamdive.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class Mp3Service {
    @Autowired
    PurchasedMusicRepository purchasedMusicRepo;
    @Autowired
    MemberRepository memberRepo;
    @Autowired
    MembershipUserRepository membershipUserRepo;
    @Autowired
    CartRepository cartRepo;
    @Autowired
    PaymentRepository paymentRepo;
    @Autowired
    MusicRepository musicRepo;
    @Autowired
    CartService cs;

    /* 이미 구매한 곡이 있는지 확인 */
    public List<PurchasedMusicResponseDto> checkPurchasedMusic(
            List<Integer> musicIdList, String giftToId) {
        // 선물 받을 회원 조회
        Member member = memberRepo.findByMemberId(giftToId);
        // 해당 회원이 구매한 곡 리스트 조회
        List<PurchasedMusicResponseDto> purchasedMusicList = purchasedMusicRepo.findByMember(member);
        // 구매한 곡이 담길 리스트
        List<PurchasedMusicResponseDto> matchedMusicList = new ArrayList<>();

        // cartList에서 각각의 곡을 순회하면서 구매한 곡과 비교
        musicIdList.forEach(musicId -> {
            // purchasedMusicList에서 해당 음악이 이미 구매된 곡인지 확인
            purchasedMusicList.forEach(purchasedMusic -> {
                if (purchasedMusic.getMusicId() == musicId) {
                    matchedMusicList.add(purchasedMusic);  // 일치하는 곡을 matchedMusicList에 추가
                }
            });
        });

        // 결과 반환
        return matchedMusicList;
    }

    /* 멤버십으로 개별곡 결제 */
    public void payOnlyMembership(OrderMusicRequestDto requestDto) {
        // 소장할 멤버 정보 가져오기
        Member ownerMember = new Member();
        if (requestDto.getGiftToId() != null && !requestDto.getGiftToId().isEmpty()) {
            ownerMember = musicOwner(requestDto.getGiftToId());
        } else {
            ownerMember = musicOwner(requestDto.getMemberId());
        }
        System.out.println("누가 소장하나면... " + ownerMember.getMemberId());

        // 구매한 곡 저장
        savePurchasedMusic(requestDto.getMusicIdList(), ownerMember);

        // 구매한 곡 장바구니에서 삭제
        cs.deleteByCartIdList(requestDto.getCartIdList());

        // 다운로드 멤버십 개수 차감
        Membership_user downloadMembership = membershipUserRepo.findByMembershipUserId(requestDto.getMembershipUserId());
        int useCount = requestDto.getMembershipCount(); // 사용 개수
        payMembership(downloadMembership, useCount);

        // payment 엔티티로 변환
        Member member = memberRepo.findByMemberId(requestDto.getMemberId());
        Payment payment = requestDto.toEntity(member);
        paymentRepo.save(payment);
    }

    /* 소장할 멤버 정보 가져오기 */
    public Member musicOwner(String memberId){
        return memberRepo.findByMemberId(memberId);
    }

    /* 구매곡 저장 */
    public void savePurchasedMusic(List<Integer> musicIdList, Member purchasedMember) {
        // 구매한 곡을 한번에 저장할 배열
        List<PurchasedMusic> purchasedMusicToSave = new ArrayList<>();

        // 구매한 곡 배열에 담기
        for (Integer musicId : musicIdList) {
            PurchasedMusic purchasedMusic = new PurchasedMusic();
            purchasedMusic.setMember(purchasedMember);
            Music music = musicRepo.findById(musicId).orElseThrow();
            purchasedMusic.setMusic(music);
            purchasedMusicToSave.add(purchasedMusic);
            System.out.println("어떤 곡을 소장하냐면.... " + purchasedMusic.getMusic().getMusicId());
        }

        // 한번에 저장
        if(!purchasedMusicToSave.isEmpty()){
            purchasedMusicRepo.saveAll(purchasedMusicToSave);
        }
    }

    /* 다운로드 멤버십에서 사용한 만큼 개수 차감 */
    public void payMembership(Membership_user downloadMembership, int useCount) {
        int newDownloadCount = downloadMembership.getDownloadCount() - useCount;
        downloadMembership.setDownloadCount(newDownloadCount);
        System.out.println("남은 멤버십 개수는요.... " + downloadMembership.getDownloadCount());
    }
}
