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
    MembershipRepository msr;

    /* 카테고리에 해당하는 멤버십 정보 가져오기 */
    public List<Membership> getMembership(String category) {
        if(category.equals("all"))
            return msr.findByCategoryNot("gift");
        else
            return msr.findByCategory(category);
    }

}
