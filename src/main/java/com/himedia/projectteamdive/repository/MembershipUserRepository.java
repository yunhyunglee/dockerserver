package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Membership;
import com.himedia.projectteamdive.entity.Membership_user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MembershipUserRepository extends JpaRepository<Membership_user, Integer> {
    /* 활성화 시킨 멤버십 기록이 구매하려는 기록과 겹치는지 확인 */
    @Query("SELECT mu FROM Membership_user mu " +
            "JOIN mu.member m " +
            "JOIN mu.membership ms " +
            "WHERE m.memberId = :memberId " + // 구매하려는 유저
            "AND ms.category = :membershipCategory " + // 구매하려는 멤버십의 카테고리
            "AND (mu.endDate IS NULL OR mu.endDate > CURRENT_TIMESTAMP) " + // 활성화 기간이 끝났는지 검토
            "ORDER BY mu.startDate DESC") // 마지막으로 추가된 멤버십
    Membership_user getLatestActiveMembershipByCategory(@Param("memberId") String memberId, @Param("membershipCategory") String membershipCategory);
}
