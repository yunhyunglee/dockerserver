package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, String> {


    Member findByMemberId(String memberId);
}
