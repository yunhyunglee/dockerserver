package com.himedia.projectteamdive.service;

import com.himedia.projectteamdive.entity.Member;
import com.himedia.projectteamdive.entity.RoleName;
import com.himedia.projectteamdive.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class MemberService {

    @Autowired
    MemberRepository mr;

    BCryptPasswordEncoder pe = new BCryptPasswordEncoder();

    public Member getMember(String memberId) {
        return mr.findByMemberId(memberId);
    }


    public void insertMember(Member member) {

        List<RoleName> roles =  new ArrayList<RoleName>();
        roles.add(RoleName.USER);
        member.setMemberRoleList(roles);
        member.setPassword(pe.encode(member.getPassword()));
        mr.save(member);

    }
}
