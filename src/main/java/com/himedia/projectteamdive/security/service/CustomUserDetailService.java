package com.himedia.projectteamdive.security.service;

import com.himedia.projectteamdive.entity.Member;
import com.himedia.projectteamdive.repository.MemberRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class CustomUserDetailService  implements UserDetailsService {
//    final MemberRepository mr;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("loadUserByUsername - username : " + username + "   ----------------------------------");



        return null;
    }
}
