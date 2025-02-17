package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Allpage;
import com.himedia.projectteamdive.entity.Likes;
import com.himedia.projectteamdive.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LikesRepository extends JpaRepository<Likes, Integer> {
    Likes findByMemberAndAllpage(Member member, Allpage allpage);

    List<Likes> findByMember(Member member);
}
