package com.himedia.projectteamdive.entity;

import com.himedia.projectteamdive.repository.MusicRepository;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Builder
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "album_id")
    private int albumId;
    private String title;
    private String image;
    @CreationTimestamp
    @Column( columnDefinition="DATETIME default now()" )
    private Timestamp indate;

    @ManyToOne
    @JoinColumn(name = "artist_id")
    Artist artist;

    @OneToMany(mappedBy = "album",cascade = CascadeType.ALL, orphanRemoval = true)
    List<Music> musicList =new ArrayList<>();

    // 음악 추가 메서드
    public void addAlbum(Music music) {
        musicList.add(music);
        music.setAlbum(this);
    }

    // 음악 삭제 메서드
    public void removeAlbum(Music music) {
        musicList.remove(music); // 리스트에서 제거
    }

}
