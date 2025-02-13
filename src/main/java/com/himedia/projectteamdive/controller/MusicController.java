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
import java.util.Map;

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
    @PostMapping("/updateArtist")
    public HashMap<String, Object> updateArtist(@RequestBody Artist artist) {
        HashMap<String, Object> map = new HashMap<>();
        ms.updateArtist(artist);
        map.put("msg","yes");
        return map;
    }
    @PostMapping("/updateAlbum")
    public HashMap<String, Object> updateAlbum(@RequestBody Album album) {
        HashMap<String, Object> map = new HashMap<>();
        ms.updateAlbum(album);
        map.put("msg","yes");
        return map;
    }

    @PostMapping("/updateMusic")
    public HashMap<String, Object> updateMusic(@RequestBody Music music) {
        HashMap<String, Object> map = new HashMap<>();
        ms.updateMusic(music);
        map.put("msg","yes");
        return map;
    }

    @DeleteMapping("/deleteArtist")
    public HashMap<String, Object> deleteArtist(@RequestBody Artist artist) {
        HashMap<String, Object> map = new HashMap<>();
        ms.deleteArtist(artist);
        map.put("msg","yes");
        return map;
    }
    @DeleteMapping("/deleteAlbum")
    public HashMap<String, Object> deleteAlbum(@RequestBody Album album) {
        HashMap<String, Object> map = new HashMap<>();
        ms.deleteAlbum(album);
        map.put("msg","yes");
        return map;
    }
    @DeleteMapping("/deleteMusic")
    public HashMap<String, Object> deleteMusic(@RequestBody Music music) {
        HashMap<String, Object> map = new HashMap<>();
        ms.deleteMusic(music);
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
    @PostMapping("/addplayCount")
    public HashMap<String, Object> addplayCount(@RequestBody HashMap<Integer,Integer> playCount) {
        System.out.println(playCount);
        HashMap<String, Object> map = new HashMap<>();
        ms.addPlayCount(playCount);
        map.put("msg","yes");
        return map;
    }

    @GetMapping("/getMusicChart")
    public HashMap<String, Object> getMusicChart() {
        HashMap<String, Object> map = ms.getMusicChart();


        return map;
    }

    @GetMapping("/getAlbumChart")
    public HashMap<String, Object> getAlbumChart() {
        HashMap<String, Object> map = new HashMap<>();
        List<Album>albumList= ms.getAlbumChart();
        map.put("albumList",albumList);
        return map;
    }

    @GetMapping("/getArtist")
    public HashMap<String, Object> getArtist(@RequestParam("artistId")int artistId) {
        HashMap<String, Object> map = new HashMap<>();
        map.put("artist",ms.getArtist(artistId));
        return map;
    }
    @GetMapping("/getAlbum")
    public HashMap<String, Object> getAlbum(@RequestParam("albumId")int albumId) {
        HashMap<String, Object> map = new HashMap<>();
        map.put("album",ms.getAlbum(albumId));
        return map;
    }
    @GetMapping("/getMusic")
    public HashMap<String, Object> getMusic(@RequestParam("musicId")int musicId) {
        HashMap<String, Object> map = new HashMap<>();
        map.put("music",ms.getMusic(musicId));
        return map;
    }

    @GetMapping("/getSearch")
    public HashMap<String, Object> getSearch(@RequestParam("key")String key) {
        HashMap<String, Object> map = ms.search(key);
        return map;
    }








}
