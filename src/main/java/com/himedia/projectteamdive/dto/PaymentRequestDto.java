package com.himedia.projectteamdive.dto;

import com.himedia.projectteamdive.entity.Payment;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PaymentRequestDto {
    /* 클라이언트 -> 서버로 결제 정보를 보낼 때 사용 */
    private String orderId;
    private int amount;
    private String orderName;
    private String customerEmail;
    private String customerName;

    public PaymentRequestDto(String orderId, int amount, String orderName,
                             String customerEmail, String customerName) {
        this.orderId = orderId;
        this.amount = amount;
        this.orderName = orderName;
        this.customerEmail = customerEmail;
        this.customerName = customerName;
    }

    /* DTO 를 엔티티로 변환할 수 있도록 하는 메소드 */
    public Payment toEntity() {
        return Payment.builder()
                .orderId(orderId)
                .amount(amount)
                .orderName(orderName)
                .customerEmail(customerEmail)
                .customerName(customerName)
                .isPaid(false) // 초기 상태는 결제 미완료
                .build();
    }
}
