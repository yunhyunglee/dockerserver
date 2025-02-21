package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Gift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface GiftRepository extends JpaRepository<Gift, Integer> {
    @Query("SELECT g FROM Gift g " +
            "WHERE g.giftTo = :giftTo " +
            "ORDER BY CASE WHEN g.membershipDownloadCount = 0 THEN 0 ELSE 1 END ASC, " +
            "g.giftDate DESC")
    List<Gift> findGiftsByGiftToOrderByMembershipDownloadCountAndGiftDate(@Param("giftTo") String giftTo);
}
