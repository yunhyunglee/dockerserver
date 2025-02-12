package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.dto.PaymentRequestDto;
import com.himedia.projectteamdive.dto.PaymentResponseDto;
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
        System.out.println("요청보냈음.받았냐?");
        return ps.savePaymentInfo(requestDto);
    }

    /* 결제 완료 후 검증 */
    @PostMapping("/validate")
    public PaymentResponseDto validatePayment(
            @RequestParam String orderId,
            @RequestParam int amount) {
        return ps.validatePayment(orderId, amount);
    }

}
