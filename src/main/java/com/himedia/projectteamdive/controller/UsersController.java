package com.himedia.projectteamdive.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("")
public class UsersController {
    @GetMapping("/member/login")
    public String index() {
        return "안녕안녕";
    }

}
