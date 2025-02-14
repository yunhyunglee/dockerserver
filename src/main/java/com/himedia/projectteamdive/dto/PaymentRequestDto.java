package com.himedia.projectteamdive.dto;

import com.himedia.projectteamdive.entity.Member;
import com.himedia.projectteamdive.entity.Payment;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/* 클라이언트 -> 서버로 결제 정보를 보낼 때 사용 */
@Getter
@Setter
@NoArgsConstructor
public class PaymentRequestDto {
    private String orderId;
    private int amount;
    private String orderName;
    private Member member;

    public PaymentRequestDto(String orderId, int amount, String orderName, Member member) {
        this.orderId = orderId;
        this.amount = amount;
        this.orderName = orderName;
        this.member = member;
    }

    /* DTO 를 엔티티로 변환할 수 있도록 하는 메소드 */
    public Payment toEntity() {
        return Payment.builder()
                .orderId(orderId)
                .amount(amount)
                .orderName(orderName)
                .member(member)
                .isPaid(false) // 초기 상태는 결제 미완료
                .build();
    }
}
