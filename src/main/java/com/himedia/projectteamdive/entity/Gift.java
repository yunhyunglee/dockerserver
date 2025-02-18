package com.himedia.projectteamdive.entity;

import com.himedia.projectteamdive.dto.GiftRequestDto;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
@Builder
public class Gift {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gift_id")
    private int giftId;
    @Column(name = "gift_name")
    private String giftName;
    @Column(name = "gift_date")
    private Timestamp giftDate;
    @Column(name = "gift_from")
    private String giftFrom; // 보내는 이
    @Column(name = "gift_to")
    private String giftTo; // 받는 이
    @Column(name = "is_active")
    private boolean isActive = false;

    @Column(name = "membership_name")
    private String membershipName; // Membership 이름 저장
    @Column(name = "membership_period")
    private int membershipPeriod; // Membership 기간 저장
    @Column(name = "membership_category")
    private String membershipCategory; // Membership 카테고리 저장
    @Column(name = "membership_downloadCount")
    private int membershipDownloadCount; // Membership 다운로드 횟수 저장

    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinColumn(name = "membership_id", nullable = true)
    @OnDelete(action = OnDeleteAction.SET_NULL) // 부모 삭제 시 FK NULL 처리
    private Membership membership;

    public Gift(GiftRequestDto requestDto, Membership membership) {
        this.giftName = requestDto.getGiftName();
        this.giftTo = requestDto.getGiftTo();
        this.giftFrom = requestDto.getGiftFrom();
        this.giftDate = Timestamp.valueOf(LocalDateTime.now());
        this.isActive = false;
        this.membership = membership;
        this.membershipName = membership.getName();
        this.membershipPeriod = membership.getPeriod();
        this.membershipCategory = membership.getCategory();
        this.membershipDownloadCount = membership.getDownloadCount();
    }
}
