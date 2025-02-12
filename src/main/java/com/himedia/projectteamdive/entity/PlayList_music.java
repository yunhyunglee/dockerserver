//package com.himedia.projectteamdive.entity;
//
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import org.hibernate.annotations.DynamicInsert;
//import org.hibernate.annotations.DynamicUpdate;
//
//@Entity
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//@DynamicInsert
//@DynamicUpdate
//public class PlayList_music {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "playlist_music_id")
//    private int playlistMusicId;
//
//    @ManyToOne
//    @JoinColumn(name = "playlist_id")
//    Playlist playList;
//
//    @ManyToOne
//    @JoinColumn(name = "music_id")
//    Music music;
//}
