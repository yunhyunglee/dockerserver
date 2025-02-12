package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    boolean existsByOrderId(String orderId); // 메소드 중복 저장 방지

    Optional<Object> findByOrderId(String orderId);
}
