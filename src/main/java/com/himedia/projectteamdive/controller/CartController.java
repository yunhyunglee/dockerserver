package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.entity.Music;
import com.himedia.projectteamdive.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    CartService cs;

    /* 장바구니에 구매할 곡 넣기 */
    @PostMapping("/insertCart")
    public HashMap<String, Object> insertCart(
            @RequestBody List<Integer> musicIdList,
            @RequestParam("memberId") String memberId) {
        HashMap<String, Object> result = new HashMap<>();
        cs.insertCart(memberId, musicIdList);
        return result;
    }

    /* 장바구니 조회 */
    @GetMapping("/getCartList")
    public HashMap<String, Object> getCartList(@RequestParam("memberId") String memberId){
        HashMap<String, Object> result = new HashMap<>();
        result.put("cartList", cs.getCartList(memberId));
        return result;
    }
}
