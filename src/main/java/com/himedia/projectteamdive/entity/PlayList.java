package com.himedia.projectteamdive.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.util.ArrayList;
import java.util.List;

@Builder
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class PlayList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "playList_id")
    private int playListId;
    private String title;

    @ManyToOne
    @JoinColumn(name = "member_id")
    Member member;

    @ManyToMany
    @JoinTable(name = "PlayList_music",
            joinColumns = @JoinColumn(name = "playList_id"),
            inverseJoinColumns = @JoinColumn(name = "music_id"))
    private List<Music> musicList = new ArrayList<>();

    @ColumnDefault("false")
    private boolean shayringyn;

    public void addMusic(Music music) {
        if (!this.musicList.contains(music)) {
            this.musicList.add(music);
            music.getPlaylists().add(this);  // Music 엔티티에도 반대로 추가
        }
    }

}
