package com.himedia.projectteamdive.dto;

import com.himedia.projectteamdive.entity.Music;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MusicDto {
    private int musicId;
    private String title;
    private String image;
    private int playCount;
    private String genre;
    private String lyrics;
    private boolean titleMusic;
    private int trackNumber;
    private String bucketPath;

    // Music -> MusicDTO 변환
    public MusicDto(Music music) {
        this.musicId = music.getMusicId();
        this.title = music.getTitle();
        this.image = music.getImage();
        this.playCount = music.getPlayCount();
        this.genre = music.getGenre();
        this.lyrics = music.getLyrics();
        this.titleMusic = music.isTitleMusic();
        this.trackNumber = music.getTrackNumber();
        this.bucketPath = music.getBucketPath();
    }
}