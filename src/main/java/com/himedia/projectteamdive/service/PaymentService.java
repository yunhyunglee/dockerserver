package com.himedia.projectteamdive.service;

import com.himedia.projectteamdive.dto.PaymentRequestDto;
import com.himedia.projectteamdive.dto.PaymentResponseDto;
import com.himedia.projectteamdive.entity.Payment;
import com.himedia.projectteamdive.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PaymentService {

    @Autowired
    PaymentRepository pr;

    /* 결제 정보 저장 */
    public PaymentResponseDto savePaymentInfo(PaymentRequestDto requestDto) {
        Payment payment = requestDto.toEntity();
        pr.save(payment);
        System.out.println("뭘반환하고있는거임?" + new PaymentResponseDto(payment));
        return new PaymentResponseDto(payment);
    }

    /* 결제 성공 후 검증 */
    public PaymentResponseDto validatePayment(String orderId, int amount) {
        Payment payment = (Payment) pr.findByOrderId(orderId)
                .orElseThrow(() -> new IllegalArgumentException("결제 정보 없음"));

        if (payment.getAmount() != amount) {
            throw new IllegalStateException("결제 금액 불일치!");
        }

        payment.setPaid(true); // 결제 완료 처리
        return new PaymentResponseDto(payment);
    }
}
