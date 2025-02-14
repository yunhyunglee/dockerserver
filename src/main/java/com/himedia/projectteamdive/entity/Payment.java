package com.himedia.projectteamdive.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true, nullable = false, name = "order_id")
    private String orderId; // 토스에서 생성한 주문 ID
    @Column(nullable = false, name = "order_name")
    private String orderName;
    @Column(nullable = false)
    private Integer amount;

    @Column(columnDefinition="DATETIME default now()", name = "created_at")
    private Timestamp createdAt; // 생성 시간
    @PrePersist
    public void prePersist() {
        if (this.createdAt == null) {
            this.createdAt = new Timestamp(System.currentTimeMillis()); // 현재 시간 설정
        }
    }

    @ManyToOne
    @JoinColumn(name = "member_id")
    Member member;

    @Column(nullable = false, name = "is_paid")
    private boolean isPaid = false; // 결제 여부 확인 필드
    @Column(name = "payment_key")
    private String paymentKey; // 결제 검증 키

    @Column(name = "fail_reason")
    private String failReason; // 실패 이유
    @Column(name = "cancel_status")
    private String cancelStatus; // 결제 취소 여부
    @Column(name = "cancel_reason")
    private String cancelReason; // 취소 이유
}
