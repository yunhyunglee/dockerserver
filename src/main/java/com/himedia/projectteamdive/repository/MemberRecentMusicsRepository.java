package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.dto.MemberRecentMusicsDto;
import com.himedia.projectteamdive.entity.MemberRecentMusics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MemberRecentMusicsRepository extends JpaRepository<MemberRecentMusics, Integer> {

    List<MemberRecentMusics> findByMember_MemberIdOrderByIdAsc(String memberMemberId);
    @Query("SELECT new com.himedia.projectteamdive.dto.MemberRecentMusicsDto(mr) " +
            "FROM MemberRecentMusics mr " +
            "JOIN mr.music m " +
            "JOIN mr.member mem " +
            "WHERE mem.memberId = :memberId")
    List<MemberRecentMusicsDto> findByMember_MemberId(String memberId);
}
