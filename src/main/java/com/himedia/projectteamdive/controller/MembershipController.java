package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.entity.Membership_user;
import com.himedia.projectteamdive.service.MembershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/membership")
public class MembershipController {

    @Autowired
    MembershipService mss;

    /* 카테고리에 해당하는 멤버십 정보 가져오기 */
    @GetMapping("/getMembership")
    public HashMap<String, Object> getMembership(@RequestParam("category") String category) {
        HashMap<String, Object> result = new HashMap<>();
        result.put("membershipList", mss.getMembership(category));
        return result;
    }

    /* 활성화된 멤버십이 있는지 확인 */
    @GetMapping("/checkActiveMembership")
    public HashMap<String, Object> checkActiveMembership(
            @RequestParam("memberId") String memberId,
            @RequestParam("category") String membershipCategory) {
        HashMap<String, Object> result = new HashMap<>();
        Membership_user activeMembership = mss.checkActiveMembership(memberId, membershipCategory);
        if(activeMembership != null) {
            result.put("message", "yes");
            result.put("activeMembership", activeMembership);
        }else{
            result.put("message", "no");
        }
        return result;
    }

}
