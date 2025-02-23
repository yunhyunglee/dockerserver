package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Allpage;
import com.himedia.projectteamdive.entity.Likes;
import com.himedia.projectteamdive.entity.Member;
import com.himedia.projectteamdive.entity.Pagetype;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface LikesRepository extends JpaRepository<Likes, Integer> {
    Likes findByMemberAndAllpage(Member member, Allpage allpage);

    List<Likes> findByMember(Member member);

    @Query(value = "SELECT ranked.entity_id, ranked.pagetype, ranked.likeCount " +
            "FROM ( " +
            "    SELECT a.entity_id, ap.pagetype, COUNT(l.like_id) AS likeCount, " +
            "           ROW_NUMBER() OVER (PARTITION BY ap.pagetype ORDER BY COUNT(l.like_id) DESC) AS ranking " +
            "    FROM Likes l " +
            "    JOIN Allpage a ON l.allpage_id = a.allpage_id " +
            "    JOIN allpage_pagetype ap ON a.allpage_id = ap.allpage_allpage_id " +
            "    WHERE ap.pagetype = :pagetype " +
            "    GROUP BY a.entity_id, ap.pagetype " +
            ") ranked " +
            "WHERE ranked.ranking <= 3", nativeQuery = true)
    List<Object[]> findLikesRanking(@Param("pagetype") Pagetype pagetype);
}
