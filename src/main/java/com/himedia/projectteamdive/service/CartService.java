package com.himedia.projectteamdive.service;

import com.himedia.projectteamdive.entity.Cart;
import com.himedia.projectteamdive.entity.Member;
import com.himedia.projectteamdive.entity.Music;
import com.himedia.projectteamdive.repository.CartRepository;
import com.himedia.projectteamdive.repository.MemberRepository;
import com.himedia.projectteamdive.repository.MusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CartService {

    @Autowired
    CartRepository cartRepo;
    @Autowired
    MemberRepository memberRepo;
    @Autowired
    MusicRepository musicRepo;

    /* 장바구니에 구매할 곡 넣기 */
    public void insertCart(String memberId, List<Integer> musicIdList) {
        Member member = memberRepo.findByMemberId(memberId);
        Cart newCart = new Cart();
        newCart.setMember(member);

        for (Integer musicId : musicIdList) {
            Music music = musicRepo.findByMusicId(musicId);
            Optional<Cart> checkCart = cartRepo.findByMemberAndMusic(member, music);
            if (checkCart.isEmpty()) {
                newCart.setMusic(music);
                cartRepo.save(newCart);
            }
        }
    }

    /* 장바구니 조회 */
    public List<Cart> getCartList(String memberId) {
        return cartRepo.findByMember(memberRepo.findByMemberId(memberId));
    }

}
