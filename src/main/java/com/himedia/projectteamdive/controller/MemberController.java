package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.entity.Member;
import com.himedia.projectteamdive.service.MemberService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/api/member")
public class MemberController {


    @Autowired
    MemberService ms;

    @GetMapping("/test")
    public String index(){
        return "<h1>Welcome to MusicStreaming World</h1>";
    }

    @PostMapping("/loginLocal")
    public HashMap<String, Object> loginLocal(
            @RequestParam("memberId") String memberId,
            @RequestParam("password") String password,
            HttpSession session){
        HashMap<String, Object> result = new HashMap<>();
        Member member = ms.getMember(memberId);
        System.out.println(1);
        if(member == null){
            result.put("msg", "아이디가 없습니다.");
        }else if(!member.getPassword().equals(password)){
            result.put("msg", "비밀번호가 맞지 않습니다.");
        }else{
            System.out.println(2);
            result.put("msg", "yes");
            session.setAttribute("loginUser", member.getMemberId());
            result.put("loginUser", member);
        }
        System.out.println(result);
        return result;
    }


}
