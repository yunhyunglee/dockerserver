package com.himedia.projectteamdive.service;

import com.himedia.projectteamdive.entity.Membership;
import com.himedia.projectteamdive.entity.Membership_user;
import com.himedia.projectteamdive.repository.MemberRepository;
import com.himedia.projectteamdive.repository.MembershipRepository;
import com.himedia.projectteamdive.repository.MembershipUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MembershipService {

    @Autowired
    MembershipRepository msr;
    @Autowired
    MembershipUserRepository msru;

    /* 카테고리에 해당하는 멤버십 정보 가져오기 */
    public List<Membership> getMembership(String category) {
        if(category.equals("all"))
            return msr.findByCategoryNot("gift");
        else
            return msr.findByCategory(category);
    }

    public Membership_user checkActiveMembership(String memberId, String membershipCategory) {
        return msru.getLatestActiveMembershipByCategory(memberId, membershipCategory);
    }


}
