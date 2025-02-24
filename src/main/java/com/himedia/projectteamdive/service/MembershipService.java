package com.himedia.projectteamdive.service;

import com.himedia.projectteamdive.entity.Gift;
import com.himedia.projectteamdive.entity.Member;
import com.himedia.projectteamdive.entity.Membership;
import com.himedia.projectteamdive.entity.Membership_user;
import com.himedia.projectteamdive.repository.GiftRepository;
import com.himedia.projectteamdive.repository.MemberRepository;
import com.himedia.projectteamdive.repository.MembershipRepository;
import com.himedia.projectteamdive.repository.MembershipUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MembershipService {

    @Autowired
    MembershipRepository msr;
    @Autowired
    MembershipUserRepository msur;
    @Autowired
    MemberRepository mr;
    @Autowired
    GiftRepository gr;

    /* 카테고리에 해당하는 멤버십 정보 가져오기 */
    public List<Membership> getMembership(String category) {
        if(category.equals("all"))
            return msr.findByCategoryNot("gift");
        else
            return msr.findByCategory(category);
    }

    /* 카테고리를 기준으로 활성화된 멤버십이 있는지 확인 */
    public Membership_user checkActiveMembership(String memberId, String membershipCategory) {
        return msur.getLatestActiveMembershipByCategory(memberId, membershipCategory);
    }

    /* download 멤버십이 있는지 확인 */
    public Membership_user getDownloadMembership(String memberId) {
        return msur.getLatestActiveMembershipByCategory(memberId, "download");
    }

    /* 현재 로그인 유저에게 활성화된 멤버십이 있는지 확인 */
    public List<Membership_user> getActiveMembership(String memberId) {
        return msur.getActiveMembership(memberId);
    }

    /* 선물 리스트 조회 */
    public List<Gift> getGiftList(String giftTo) {
        return gr.findInactiveGiftsByGiftToOrderByMembershipDownloadCountAndGiftDate(giftTo);
    }

    /* 멤버십 활성화 */
    public Boolean membershipActive(int giftId, String membershipCategory) {
        Gift gift = gr.findByGiftId(giftId);
        Optional<Membership_user> currentActiveMembership = Optional.ofNullable(msur.getLatestActiveMembershipByCategory(gift.getGiftTo(), membershipCategory));
        if(currentActiveMembership.isEmpty()) {
            Member member = mr.findByMemberId(gift.getGiftTo());
            msur.save(new Membership_user(member, gift)); // 멤버십 활성화
            gift.setActive(true); // 선물 사용 표시
            return true;
        }else{
            return false;
        }
    }

}
