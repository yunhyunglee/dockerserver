package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.entity.Member;
import com.himedia.projectteamdive.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/member")
public class MemberController {


    @Autowired
    MemberService ms;

    @GetMapping("/test")
    public String index(){
        return "<h1>Welcome to MusicStreaming World</h1>";
    }

    @PostMapping("/login")
    public HashMap<String, Object> login( @RequestParam String memberId ){
        HashMap<String, Object> result = new HashMap<>();
        Member member = ms.getLoginUser(memberId);
        if(member != null){
            result.put("msg", "yes");
        }else{
            result.put("msg", "no");
        }
        return result;
    }


}
