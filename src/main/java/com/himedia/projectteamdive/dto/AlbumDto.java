package com.himedia.projectteamdive.dto;

import com.himedia.projectteamdive.entity.Album;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AlbumDto {
    private int albumId;
    private String title;
    private String image;
    private Timestamp indate;
    private List<MusicDto> musicList;  // 음악 리스트
    private ArtistDto artist;

    // Album -> AlbumDTO 변환
    public AlbumDto(Album album) {
        this.albumId = album.getAlbumId();
        this.title = album.getTitle();
        this.image = album.getImage();
        this.indate = album.getIndate();
        // 음악 리스트를 MusicDTO로 변환
        this.musicList = album.getMusicList().stream()
                .map(music -> new MusicDto(music))  // MusicDTO는 별도로 만들어야 함
                .collect(Collectors.toList());
        this.artist = new ArtistDto(album.getArtist());
    }
}
