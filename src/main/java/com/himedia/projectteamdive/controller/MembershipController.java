package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.entity.Member;
import com.himedia.projectteamdive.entity.Membership;
import com.himedia.projectteamdive.entity.Membership_user;
import com.himedia.projectteamdive.service.MembershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

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

    /* download 멤버십 조회 */
    @GetMapping("/getDownloadMembership")
    public HashMap<String, Object> getDownloadMembership(@RequestParam("memberId") String memberId) {
        HashMap<String, Object> result = new HashMap<>();
        Membership_user downloadMembership = mss.checkActiveMembership(memberId, "download");
        if(downloadMembership != null) {
            result.put("downloadMembership", downloadMembership);
            result.put("message", "yes");
        }else{
            result.put("message", "no");
        }
        return result;
    }

    /* 카테고리 기준으로 활성화된 멤버십이 있는지 확인 */
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

    /* 로그인 유저의 활성화 멤버십 확인 */
    @GetMapping("/getActiveMembership")
    public HashMap<String, Object> getActiveMembership(
            @RequestParam("memberId") String memberId) {
        HashMap<String, Object> result = new HashMap<>();
        List<Membership_user>list = mss.getActiveMembership(memberId);
        result.put("memberShipUserList", list);
        return result;
    }

    /* 선물 리스트 출력 */
    @GetMapping("/getGiftList")
    public HashMap<String, Object> getGiftList(@RequestParam("giftTo") String giftTo){
        HashMap<String, Object> result = new HashMap<>();
        result.put("giftList", mss.getGiftList(giftTo));
        return result;
    }

    /* 멤버십 활성화 */
    @PostMapping("/membershipActivate")
    public HashMap<String, Object> membershipActivate(
            @RequestParam("giftId") int giftId,
            @RequestParam("membershipCategory") String membershipCategory) {
        HashMap<String, Object> result = new HashMap<>();
        Boolean isActive = mss.membershipActive(giftId, membershipCategory);

        if(isActive) {
            result.put("message", "yes");
        }else{
            result.put("message", "no");
        }
        return result;
    }

    @PostMapping("/updateMembership")
    public HashMap<String, Object> updateMembership(@RequestBody Membership membership) {
        HashMap<String, Object> result = new HashMap<>();
        Membership updatedMembership = mss.updateMembership(membership);
        result.put("updatedMembership", updatedMembership);
        result.put("msg", "yes");
        return result;
    }

    @PutMapping("/toggleMembershipActive")
    public HashMap<String, Object> toggleMembershipActive(@RequestBody Membership membership) {
        HashMap<String, Object> result = new HashMap<>();

        boolean success = mss.toggleMembershipActive(membership.getMembershipId()); // 🔥 isActive 대신 toggle 기능 수행

        result.put("msg", success ? "yes" : "no");
        return result;
    }








}
