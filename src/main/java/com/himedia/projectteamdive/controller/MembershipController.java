package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.service.MembershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/membership")
public class MembershipController {

    @Autowired
    MembershipService mss;

    /* 멤버십 리스트 가져오기 */
    @GetMapping("/getMembership")
    public HashMap<String, Object> getMembership() {
        HashMap<String, Object> result = new HashMap<>();
        result.put("membershipList", mss.getMembership());
        return result;
    }


}
