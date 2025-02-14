package com.himedia.projectteamdive.service;

import com.himedia.projectteamdive.dto.PaymentRequestDto;
import com.himedia.projectteamdive.dto.PaymentResponseDto;
import com.himedia.projectteamdive.dto.PaymentSuccessDto;
import com.himedia.projectteamdive.entity.Membership;
import com.himedia.projectteamdive.entity.Payment;
import com.himedia.projectteamdive.repository.MemberRepository;
import com.himedia.projectteamdive.repository.MembershipUserRepository;
import com.himedia.projectteamdive.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@Service
@Transactional
public class PaymentService {

    @Autowired
    PaymentRepository pr;
    @Autowired
    MemberRepository mr;
    @Autowired
    MembershipUserRepository msur;

    /* 결제 정보 저장 */
    public PaymentResponseDto savePaymentInfo(PaymentRequestDto requestDto) {
        Payment payment = requestDto.toEntity();
        pr.save(payment);
        return new PaymentResponseDto(payment);
    }

    /* 결제 성공 후 검증 및 최종 승인을 위한 응답 반환 */
    public ResponseEntity<String> paymentSuccess(String paymentKey, String orderId, int amount) {
        Payment payment = validatePayment(orderId, amount); // 요청 가격 == 결제 금액 확인
        ResponseEntity<String> response = confirmPayment(paymentKey, orderId, amount);
        payment.setPaid(true); // 결제 완료 처리
        payment.setPaymentKey(paymentKey); // 결제 검증 키 저장

        return response;
    }

    /* 결제 요청 가격과 실제 결제된 금액이 같은지 확인 */
    private Payment validatePayment(String orderId, int amount) {
        Payment payment = pr.findByOrderId(orderId)
                .orElseThrow(() -> new IllegalArgumentException("결제 정보 없음"));

        if (payment.getAmount() != amount) {
            throw new IllegalStateException("결제 금액 불일치");
        }
        return payment;
    }

    /* 토스 페이먼츠 api 에 결제 승인 요청 전달 */
    private ResponseEntity<String> confirmPayment(String paymentKey, String orderId, int amount) {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://api.tosspayments.com/v1/payments/confirm";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // 토스페이먼츠 시크릿 키 (Base64 인코딩 필요)
        String secretKey = "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6";
        String encodedAuth = Base64.getEncoder().encodeToString((secretKey + ":").getBytes(StandardCharsets.UTF_8));
        headers.set("Authorization", "Basic " + encodedAuth);

        Map<String, Object> body = new HashMap<>();
        body.put("paymentKey", paymentKey);
        body.put("orderId", orderId);
        body.put("amount", amount);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers); // 요청 데이터와 요청 해더를 포함한 요청 객체 생성
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class); // 요청 보내고 응답 받기

        return response;
    }


}
