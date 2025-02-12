package com.himedia.projectteamdive.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.sql.Timestamp;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class Playcountlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "music_id", nullable = false)
    private Music music;  // 재생된 음악 (Music 엔티티와 관계)

    @Column(nullable = false)
    private Timestamp indate;  // 재생된 시간

    @Column(nullable = false)
    private Integer playCount;  // 음악이 재생된 횟수

    public Playcountlist(Music music, Timestamp indate, int playCount) {
        this.music = music;
        this.indate = indate;
        this.playCount = playCount;
    }
}
