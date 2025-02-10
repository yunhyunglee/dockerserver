package com.himedia.projectteamdive.dto;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.sql.Timestamp;
import java.util.*;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class MemberDto extends User {
    public MemberDto(String username, String password,
                     String name, String nickname, String phone,
                     String email, String gender, Timestamp birth,
                     int zipNum, String address, String addressDetail, String addressExtra,
                     String image, String provider, List<String>memberRoleList) {
        super(username, password, memberRoleList.stream().map(str->new SimpleGrantedAuthority("ROLE_"+str)).collect(Collectors.toList()));
        this.memberId=username;
        this.password=password;
        this.name=name;
        this.nickname=nickname;
        this.phone=phone;
        this.email=email;
        this.gender=gender;
        this.birth=birth;
        this.zipNum=zipNum;
        this.address=address;
        this.addressDetail=addressDetail;
        this.addressExtra=addressExtra;
        this.image=image;
        this.provider=provider;
        this.memberRoleList=memberRoleList;

    }
    private String memberId;
    private String password;
    private String name;
    private String nickname;
    private String phone;
    private String email;
    private String gender;
    private Timestamp birth;
    private int zipNum;
    private String address;
    private String addressDetail;
    private String addressExtra;
    private String image;
    private String provider;
    private List<String> memberRoleList=new ArrayList<String>();

    public Map<String, Object> getClaims() {
        Map<String,Object> dataMap=new HashMap<>();
        dataMap.put("memberId", memberId);
        dataMap.put("password", password);
        dataMap.put("name", name);
        dataMap.put("nickname", nickname);
        dataMap.put("phone", phone);
        dataMap.put("email", email);
        dataMap.put("gender", gender);
        dataMap.put("birth", birth);
        dataMap.put("zipNum", zipNum);
        dataMap.put("address", address);
        dataMap.put("addressDetail", addressDetail);
        dataMap.put("addressExtra", addressExtra);
        dataMap.put("image", image);
        dataMap.put("provider", provider);
        dataMap.put("memberRoleList", memberRoleList);
        return dataMap;
    }

}
