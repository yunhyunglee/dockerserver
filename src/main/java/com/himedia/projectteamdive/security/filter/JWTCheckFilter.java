package com.himedia.projectteamdive.security.filter;

import com.google.gson.Gson;
import com.himedia.projectteamdive.dto.MemberDto;
import com.himedia.projectteamdive.entity.Member;
import com.himedia.projectteamdive.entity.RoleName;
import com.himedia.projectteamdive.security.util.CustomJWTException;
import com.himedia.projectteamdive.security.util.JWTUtil;
import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

public class JWTCheckFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        try {
            String accsessToken= authHeader.substring(7);
            Map<String,Object>claims= JWTUtil.validateToken(accsessToken);
            System.out.println("JWT claims: "+claims);

            String memberId= (String) claims.get("memberId");
            String password= (String) claims.get("password");
            String name= (String) claims.get("name");
            String nickname= (String) claims.get("nickname");
            String phone= (String) claims.get("phone");
            String email= (String) claims.get("email");
            String gender= (String) claims.get("gender");
            Timestamp birth= (Timestamp) claims.get("birth");
            String address= (String) claims.get("address");
            String addressDetail= (String) claims.get("addressDetail");
            String addressExtra= (String) claims.get("addressExtra");
            int zipNum= (int) claims.get("zipNum");
            String image= (String) claims.get("image");
            String provider= (String) claims.get("provider");
            List<String>memberRoleList= (List<String>) claims.get("memberRoleList");
            MemberDto memberDto=new MemberDto(memberId,password,name,nickname,phone,email,gender,birth,zipNum,address,addressDetail,addressExtra,image,provider,memberRoleList);


            UsernamePasswordAuthenticationToken authenticationToken= new UsernamePasswordAuthenticationToken(memberDto,password,memberDto.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            filterChain.doFilter(request, response);

        }catch (Exception | CustomJWTException e){
            System.out.println("JWT Check Error..............");
            System.out.println(e.getMessage());
            Gson gson = new Gson();
            String msg = gson.toJson(Map.of("error", "ERROR_ACCESS_TOKEN"));
            response.setContentType("application/json");
            PrintWriter printWriter = response.getWriter();
            printWriter.println(msg);
            printWriter.close();
        }


    }
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        String path=request.getRequestURI();
        System.out.println("check uri: "+path);

        if(request.getMethod().equals("OPTIONS")){
            return true;
        }

        if(path.startsWith("/member/login")){
            return true;
        }
        return false;
    }

}
