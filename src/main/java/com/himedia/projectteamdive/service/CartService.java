package com.himedia.projectteamdive.service;

import com.himedia.projectteamdive.dto.CartRequestDto;
import com.himedia.projectteamdive.dto.CartResponseDto;
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
import java.util.stream.Collectors;

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
    public void insertCart(CartRequestDto requestDto) {
        Member member = memberRepo.findByMemberId(requestDto.getMemberId());
        Cart newCart = new Cart();
        newCart.setMember(member);
        List<Integer> musicIdList = requestDto.getMusicIdList();

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
    public List<CartResponseDto> getCartList(String memberId) {
        Member member = memberRepo.findByMemberId(memberId);
        List<Cart> cartList = cartRepo.findByMember(member);
        return cartList.stream()
                .map(CartResponseDto::new) // Cart 객체를 CartResponseDto로 변환
                .collect(Collectors.toList());
    }

}
