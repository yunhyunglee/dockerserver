package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.dto.PaymentRequestDto;
import com.himedia.projectteamdive.dto.PaymentResponseDto;
import com.himedia.projectteamdive.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    PaymentService ps;

    /* 결제 요청 전 결제 데이터 사전 저장 */
    @PostMapping("/orderRequest")
    public PaymentResponseDto savePayment(
            @RequestBody PaymentRequestDto requestDto,
            @RequestParam("memberId") String memberId) {
        return ps.savePaymentInfo(requestDto, memberId);
    }

    /* 결제 완료 후 검증 */
    @PostMapping("/paymentSuccess")
    public ResponseEntity<String> paymentSuccess(
            @RequestParam("paymentKey") String paymentKey,
            @RequestParam("orderId") String orderId,
            @RequestParam("amount") int amount) {
        return ps.paymentSuccess(paymentKey, orderId, amount);
    }

    /* 결제 요청 실패 이유 저장 */
//    @PostMapping("/paymentFail")
//    public ResponseEntity<String> paymentFail(@RequestParam("failReason") String failReason) {
//        return ps.paymentFail(failReason);
//    }

}
