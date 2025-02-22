package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.MemberRecentMusics;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberRecentMusicsRepository extends JpaRepository<MemberRecentMusics, Integer> {

    List<MemberRecentMusics> findByMember_MemberIdOrderByIdAsc(String memberMemberId);
}
