package com.himedia.projectteamdive.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.sql.Timestamp;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Gift {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gift_id")
    private int giftId;
    @Column(name = "gift_name")
    private String giftName;
    @Column(name = "gift_message")
    private String giftMessage;
    @Column(name = "gift_date")
    private Timestamp giftDate;
    @Column(name = "gift_from")
    private String giftFrom; // 보내는 이
    @Column(name = "gift_to")
    private String giftTo; // 받는 이

    @ManyToOne
    @JoinColumn(name = "music_id")
    Music music;

    @ManyToOne
    @JoinColumn(name = "membership_id")
    Membership membership;

    @PrePersist
    @PreUpdate
    private void validate() {
        if ((music == null && membership == null) || (music != null && membership != null)) {
            throw new IllegalStateException("Music과 Membership 중 하나만 존재해야 합니다.");
        }
    }
}
