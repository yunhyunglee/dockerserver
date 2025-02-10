package com.himedia.projectteamdive.service;

import com.himedia.projectteamdive.entity.Member;
import com.himedia.projectteamdive.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class MemberService {

    @Autowired
    MemberRepository mr;

    public Member getLoginUser(String memberId) {

        return mr.findBymemberId(memberId);
    }
}
