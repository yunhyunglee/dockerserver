package com.himedia.projectteamdive.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class Membership_user {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "membership_user_id")
    private int membershipUserId;
    @Column(name = "download_count")
    private int downloadCount;
    private Timestamp startDate;
    private Timestamp endDate;

    @Column(name = "membership_name")
    private String membershipName; // Membership 이름 저장
    @Column(name = "membership_period")
    private int membershipPeriod;   // Membership 기간 저장
    @Column(name = "membership_category")
    private String membershipCategory;   // Membership 카테고리 저장

    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinColumn(name = "membership_id", nullable = true)
    @OnDelete(action = OnDeleteAction.SET_NULL) // 부모 삭제 시 FK NULL 처리
    private Membership membership;

    public Membership_user(Member member, Membership membership) {
        this.member = member;
        this.membership = membership;
        this.membershipName = membership.getName();
        this.membershipPeriod = membership.getPeriod();
        this.membershipCategory = membership.getCategory();
        this.downloadCount = membership.getDownloadCount();
        this.startDate = Timestamp.valueOf(LocalDateTime.now());
        this.endDate = Timestamp.valueOf(LocalDateTime.now().plusMonths(membership.getPeriod()));
    }

    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinColumn(name = "member_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Member member;
}
