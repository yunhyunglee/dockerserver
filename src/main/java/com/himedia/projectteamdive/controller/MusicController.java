package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.entity.*;
import com.himedia.projectteamdive.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/music")
public class MusicController {
    @Autowired
    MusicService ms;

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

    @PostMapping("/insertPlayList")
    public HashMap<String, Object> insertPlayList(@AuthenticationPrincipal User user) {
        HashMap<String, Object> map = new HashMap<>();
        ms.insertPlayList(user.getUsername());
        map.put("msg","yes");
        return map;
    }
    @PostMapping("/insertPlayListMusic")
    public HashMap<String, Object> insertPlayListMusic(@RequestParam("musics") List<Music> musics,@RequestParam("playList")PlayList playList) {
        HashMap<String, Object> map = new HashMap<>();
        ms.insertPlayListMusic(musics,playList);
        map.put("msg","yes");
        return map;
    }

}
