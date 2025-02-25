package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.dto.CartRequestDto;
import com.himedia.projectteamdive.dto.OrderMusicRequestDto;
import com.himedia.projectteamdive.dto.PurchasedMusicResponseDto;
import com.himedia.projectteamdive.entity.Cart;
import com.himedia.projectteamdive.service.Mp3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/mp3")
public class Mp3Controller {
    @Autowired
    Mp3Service ms;

    /* 이미 구매한 곡이 있는지 확인 */
    @PostMapping("/checkPurchasedMusic")
    public HashMap<String, Object> getPurchasedMusic(
            @RequestBody List<Integer> musicIdList,
            @RequestParam("giftToId") String giftToId) {
        HashMap<String, Object> result = new HashMap<>();
        List<PurchasedMusicResponseDto> purchasedMusicList = ms.checkPurchasedMusic(musicIdList, giftToId);
        if(!purchasedMusicList.isEmpty()) {
            result.put("message", "yes");
            result.put("purchasedMusicList", purchasedMusicList);
        }else{
            result.put("message", "no");
        }
        return result;
    }

    /* 멤버십으로 개별곡 결제 */
    @PostMapping("/payOnlyMembership")
    public HashMap<String, Object> payOnlyMembership(@RequestBody OrderMusicRequestDto requestDto){
        HashMap<String, Object> result = new HashMap<>();
        ms.payOnlyMembership(requestDto);
        result.put("message", "yes");
        return result;
    }
}
