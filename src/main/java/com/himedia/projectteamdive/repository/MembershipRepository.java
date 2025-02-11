package com.himedia.projectteamdive.repository;


import com.himedia.projectteamdive.entity.Membership;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MembershipRepository extends JpaRepository<Membership, Integer> {

}
