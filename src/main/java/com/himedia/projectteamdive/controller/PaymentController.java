package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.dto.PaymentRequestDto;
import com.himedia.projectteamdive.dto.PaymentResponseDto;
import com.himedia.projectteamdive.dto.PaymentSuccessDto;
import com.himedia.projectteamdive.entity.Payment;
import com.himedia.projectteamdive.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    PaymentService ps;

    /* 결제 전 결제 데이터 사전 저장 */
    @PostMapping("/orderRequest")
    public PaymentResponseDto savePayment(@RequestBody PaymentRequestDto requestDto) {
        return ps.savePaymentInfo(requestDto);
    }

    /* 결제 완료 후 검증 */
    @PostMapping("/paymentSuccess")
    public ResponseEntity<String> paymentSuccess(
            @RequestParam String paymentKey,
            @RequestParam String orderId,
            @RequestParam int amount) {
        System.out.println("요청은오냐?" + paymentKey);
        return ps.paymentSuccess(paymentKey, orderId, amount);
    }

}
