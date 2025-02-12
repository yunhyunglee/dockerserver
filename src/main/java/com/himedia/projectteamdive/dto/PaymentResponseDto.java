package com.himedia.projectteamdive.dto;

import com.himedia.projectteamdive.entity.Payment;
import lombok.Getter;

@Getter
public class PaymentResponseDto {
    /* 서버 -> 클라이언트로 결제 정보를 보낼 때 사용 */
    private String orderId;
    private int amount;
    private String orderName;
    private boolean isPaid; // 결제 완료 여부

    public PaymentResponseDto(Payment payment) {
        this.orderId = payment.getOrderId();
        this.amount = payment.getAmount();
        this.orderName = payment.getOrderName();
        this.isPaid = payment.isPaid();
    }
}
