package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.entity.Member;
import com.himedia.projectteamdive.security.util.CustomJWTException;
import com.himedia.projectteamdive.security.util.JWTUtil;
import com.himedia.projectteamdive.service.MemberService;
import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/member")
public class MemberController {


    @Autowired
    MemberService ms;

    @GetMapping("/test")
    public String index(){
        return "<h1>Welcome to MusicStreaming World</h1>";
    }


    @GetMapping("/refresh")
    public HashMap<String, Object> refresh(
            @RequestHeader("Authorization") String authHeader,
            @RequestParam("refreshToken") String refreshToken) throws CustomJWTException {
        HashMap<String, Object> result = new HashMap<>();
        if( refreshToken == null){
            throw new CustomJWTException("NULL_REFRESHTOKEN");
        }
        if( authHeader == null || authHeader.length()<7){
            throw new CustomJWTException("INVALID_TOKEN");
        }
        String accessToken = authHeader.substring(7);

        boolean expiredResult = checkExpiredToken( accessToken );
        if( expiredResult){
            System.out.println("Remain to TOKEN");
            result.put("accessToken", accessToken);
            result.put("refreshToken", refreshToken);
        }else{
            System.out.println("exchange to TOKEN");

            Map<String, Object> claims = JWTUtil.validateToken(refreshToken);

            String newAccessToken = JWTUtil.generateToken(claims, 1);
            String newRefreshToken = "";
            if(checkTime((Integer)claims.get("exp"))){
                newRefreshToken = JWTUtil.generateToken(claims, 60*24);
            }else{
                newRefreshToken = refreshToken;
            }
            result.put("accessToken", newAccessToken);
            result.put("refreshToken", newRefreshToken);
        }

        return result;
    }

        private boolean checkTime(Integer exp) {
            java.util.Date expDate = new java.util.Date((long)exp*(1000));
            long timeGap = expDate.getTime() - System.currentTimeMillis();
            long remainTime = timeGap/(1000*60);
            return remainTime < 60;
        }

        private boolean checkExpiredToken(String accessToken) {
            try {
                JWTUtil.validateToken(accessToken);
            } catch (CustomJWTException e) {
                if(e.getMessage().equals("Expired")){
                    return false;
                }
            }
            return true;
        }

    @PostMapping("/checkId")
    public HashMap<String, Object> checkId(@RequestParam("memberId")String memberId){
        HashMap<String, Object> result = new HashMap<>();
        Member member = ms.getMember(memberId);
        if (member == null) {
            result.put("msg", "yes");
        }else{
            result.put("msg", "no");
        }
        System.out.println(member);
        System.out.println(result);

        return result;
    }


//    @PostMapping("/join")
//    public HashMap<String, Object> join(@RequestBody Member member){
//        HashMap<String, Object> result = new HashMap<>();
//        System.out.println(member);
//        ms.insertMember(member);
//        result.put("msg", "yes");
//
//        return result;
//    }




}
