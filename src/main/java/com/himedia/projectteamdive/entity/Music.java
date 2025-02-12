package com.himedia.projectteamdive.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class Music {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "music_id")
    private int musicId;
    private String title;
    private String image;
    @Column(name = "play_count")
    private int playCount;
    @Column(name = "play_count_day")
    private int playCountDay;
    @Column(name = "play_count_week")
    private int playCountWeek;
    @Column(name = "play_count_month")
    private int playCountMonth;
    private String genre;
    private String lyrics;
    @Column(name = "title_music")
    private boolean titleMusic;

    @ManyToOne
    @JoinColumn(name = "album_id")
    Album album;
    @ManyToOne
    @JoinColumn(name = "artist_id")
    Artist artist;

    @ManyToMany(mappedBy = "musicList")
    List<Playlist>playlists=new ArrayList<>();





}
