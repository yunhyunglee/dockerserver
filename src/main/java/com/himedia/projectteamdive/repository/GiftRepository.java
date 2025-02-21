package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Gift;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GiftRepository extends JpaRepository<Gift, Integer> {
    List<Gift> findByGiftTo(String giftTo);
}
