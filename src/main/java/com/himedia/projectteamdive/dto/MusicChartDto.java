package com.himedia.projectteamdive.dto;

import com.himedia.projectteamdive.entity.Music;
import lombok.Data;

@Data
public class MusicChartDto {
    private Music music;
    private Long totalPlayCount;

    public MusicChartDto(Music music, Long totalPlayCount) {
        this.music = music;
        this.totalPlayCount = totalPlayCount;
    }

}

