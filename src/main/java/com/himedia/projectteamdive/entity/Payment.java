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

    @Column(nullable = false, name = "customer_email")
    private String customerEmail;

    @Column(nullable = false, name = "customer_name")
    private String customerName;

    @Column(columnDefinition="DATETIME default now()", name = "created_at")
    private Timestamp createdAt; // 생성 시간

    @Column(nullable = false, name = "is_paid")
    private boolean isPaid = false; // 결제 여부 확인 필드
}
