package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Membership_user;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MembershipUserRepository extends JpaRepository<Membership_user, Integer> {
}
