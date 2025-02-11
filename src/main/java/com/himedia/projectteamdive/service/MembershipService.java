package com.himedia.projectteamdive.service;

import com.himedia.projectteamdive.entity.Membership;
import com.himedia.projectteamdive.repository.MembershipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class MembershipService {

    @Autowired
    MembershipRepository mmr;

    /* 멤버십 정보 전부 가져오기 */
    public List<Membership> getMembership() {
        return mmr.findAll();
    }

}
