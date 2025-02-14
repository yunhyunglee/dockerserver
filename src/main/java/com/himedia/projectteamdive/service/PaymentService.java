package com.himedia.projectteamdive.service;

import com.himedia.projectteamdive.configuration.PaymentConfig;
import com.himedia.projectteamdive.dto.PaymentRequestDto;
import com.himedia.projectteamdive.dto.PaymentResponseDto;
import com.himedia.projectteamdive.entity.Member;
import com.himedia.projectteamdive.entity.Membership;
import com.himedia.projectteamdive.entity.Membership_user;
import com.himedia.projectteamdive.entity.Payment;
import com.himedia.projectteamdive.repository.MemberRepository;
import com.himedia.projectteamdive.repository.MembershipRepository;
import com.himedia.projectteamdive.repository.MembershipUserRepository;
import com.himedia.projectteamdive.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.StandardCharsets;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@Transactional
public class PaymentService {

    @Autowired
    PaymentRepository pr;
    @Autowired
    MemberRepository mr;
    @Autowired
    MembershipRepository msr;
    @Autowired
    MembershipUserRepository msur;
    @Autowired
    PaymentConfig pc;

    /* 결제 정보 저장 */
    public PaymentResponseDto savePaymentInfo(PaymentRequestDto requestDto, String memberId) {
        Payment payment = new Payment();
        Optional<Member> member = Optional.ofNullable(mr.findByMemberId(memberId));
        if(member.isPresent()) {
            requestDto.setMember(member.get());
            payment = requestDto.toEntity();
            pr.save(payment);
        }else {
            throw new IllegalArgumentException("memberId 에 해당하는 member 가 없습니다");
        }

        return new PaymentResponseDto(payment);
    }

    /* 결제 성공 후 검증 및 최종 승인을 위한 응답 반환 */
    public ResponseEntity<String> paymentSuccess(String paymentKey, String orderId, int amount) {
        Payment payment = validatePayment(orderId, amount); // 결제 금액 확인
        Membership membership = validateOrderId(orderId); // orderId 형식 확인
        ResponseEntity<String> response = confirmPayment(paymentKey, orderId, amount);

        payment.setPaymentKey(paymentKey); // 결제 검증 키 저장
        payment.setPaid(true); // 결제 완료 처리

        activeMembership(membership, payment); // 멤버십 활성화
        return response;
    }

    /* 결제 요청 가격, 실제 결제된 금액이 같은지 확인 */
    private Payment validatePayment(String orderId, int amount) {
        Payment payment = pr.findByOrderId(orderId)
                .orElseThrow(() -> new IllegalArgumentException("결제 정보 없음"));

        if (payment.getAmount() != amount) {
            throw new IllegalStateException("결제 금액 불일치");
        }
        return payment;
    }

    /* 주문번호 형식 확인 후 membership 반환 */
    private Membership validateOrderId(String orderId) {
        int index = orderId.indexOf("-"); // "-"의 위치 찾기
        if (index == -1) { // "-"가 없을 경우 예외 발생
            throw new IllegalArgumentException("orderId 에서 membershipId 를 찾을 수 없습니다");
        }
        String membershipId = orderId.substring(0, index);
        return msr.findByMembershipId(Integer.parseInt(membershipId));
    }

    /* 토스 페이먼츠 api 에 결제 승인 요청 전달 */
    private ResponseEntity<String> confirmPayment(String paymentKey, String orderId, int amount) {
        RestTemplate restTemplate = new RestTemplate();
        String url = PaymentConfig.URL;
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // 토스페이먼츠 시크릿 키 (Base64 인코딩 필요)
        String secretKey = pc.getSecretApiKey();
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

    /* 멤버십 등록 */
    private void activeMembership(Membership membership, Payment payment) {
        Membership_user membershipUser = new Membership_user();
        membershipUser.setMember(payment.getMember());
        membershipUser.setMembership(membership);
        LocalDateTime now = LocalDateTime.now(); // 현재 시간
        membershipUser.setStartDate(Timestamp.valueOf(now));
        if(membership.getDownloadCount() == 0){
            membershipUser.setEndDate(Timestamp.valueOf(now.plusMonths(membership.getPeriod())));
        }else{
            System.out.println("어허 아직이라네");
        }
        msur.save(membershipUser); // 멤버십 정보 저장
    }

    /* 결제 요청 실패 이유 저장 */
//    public ResponseEntity<String> paymentFail(String failReason) {
//
//    }
}
