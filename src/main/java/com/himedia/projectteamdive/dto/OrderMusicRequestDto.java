package com.himedia.projectteamdive.dto;

import com.himedia.projectteamdive.entity.Cart;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class OrderMusicRequestDto {
    private String memberId;
    private int membershipUserId;
    private int membershipCount;
    private int payCount;
    private String giftToId;
    private List<Integer> cartIdList;

    public OrderMusicRequestDto(
            String memberId, int membershipUserId, int membershipCount, int payCount, String giftToId, List<Integer> cartIdList) {
        this.memberId = memberId;
        this.membershipUserId = membershipUserId;
        this.membershipCount = membershipCount;
        this.payCount = payCount;
        this.giftToId = giftToId;
        this.cartIdList = cartIdList;
    }
}
