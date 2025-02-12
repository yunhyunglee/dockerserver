package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.entity.*;
import com.himedia.projectteamdive.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/music")
public class MusicController {
    @Autowired
    MusicService ms;
//=============================================admin 옮길예정
    @PostMapping("/insertMusic")
    public HashMap<String, Object> insertMusic(@RequestBody Music music) {
        HashMap<String, Object> map = new HashMap<>();
        ms.insertMusic(music);
        map.put("msg","yes");
        return map;
    }


    @PostMapping("/insertAlbum")
    public HashMap<String, Object> insertAlbum(@RequestBody Album album) {
        HashMap<String, Object> map = new HashMap<>();
        ms.insertAlbum(album);
        map.put("msg","yes");
        return map;
    }
    @PostMapping("/insertArtist")
    public HashMap<String, Object> insertArtist(@RequestBody Artist artist) {
        HashMap<String, Object> map = new HashMap<>();
        ms.insertArtist(artist);
        map.put("msg","yes");
        return map;
    }

    @PostMapping("/musicUpload")
    public HashMap<String, Object> musicUpload(@RequestParam("file") MultipartFile file) {
        HashMap<String, Object> map = new HashMap<>();
        map.put("msg","yes");
        return map;
    }
    //=====================================================

    @PostMapping("/insertPlayList")
    public HashMap<String, Object> insertPlayList(@AuthenticationPrincipal User user) {
        HashMap<String, Object> map = new HashMap<>();
        ms.insertPlayList(user.getUsername());
        map.put("msg","yes");
        return map;
    }
    @PostMapping("/insertPlayListMusic")
    public HashMap<String, Object> insertPlayListMusic(@RequestParam("musics") List<Music> musics,@RequestParam("playList")Playlist playList) {
        HashMap<String, Object> map = new HashMap<>();
        ms.insertPlayListMusic(musics,playList);
        map.put("msg","yes");
        return map;
    }

    //음악 재생수 증가메서드
    @PostMapping("/playCount")
    public HashMap<String, Object> playCount(@RequestParam("playCounts")HashMap<Integer,Integer> playCount) {
        System.out.println(playCount);
        HashMap<String, Object> map = new HashMap<>();
        ms.addPlayCount(playCount);
        map.put("msg","yes");
        return map;
    }

    @GetMapping("/getMusicChart")
    public HashMap<String, Object> getMusicChart() {
        HashMap<String, Object> map = new HashMap<>();
        List<Music> musicList= ms.getMusicChart();
        map.put("musicList",musicList);
        return map;
    }

    @GetMapping("/getAlbumChart")
    public HashMap<String, Object> getAlbumChart() {
        HashMap<String, Object> map = new HashMap<>();
        List<Album>albumList= ms.getAlbumChart();
        map.put("albumList",albumList);
        return map;
    }





}
