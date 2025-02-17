package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Allpage;
import com.himedia.projectteamdive.entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReplyRepository extends JpaRepository<Reply, Integer> {

    Reply findByReplyId(int replyId);

    List<Reply> findByAllpage(Allpage allpage);
}
