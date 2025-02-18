package com.himedia.projectteamdive.controller;

import com.himedia.projectteamdive.entity.*;
import com.himedia.projectteamdive.service.MusicService;
import com.himedia.projectteamdive.service.S3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/music")
public class MusicController {

    @Autowired
    MusicService ms;
    //=============================================admin 사용기능
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
        Album savedAlbum=ms.insertAlbum(album);
        map.put("album",savedAlbum);
        map.put("msg","yes");
        return map;
    }
    @PostMapping("/insertArtist")
    public HashMap<String, Object> insertArtist(@RequestBody Artist artist) {
        HashMap<String, Object> map = new HashMap<>();
        Artist savedArtist = ms.insertArtist(artist);
        map.put("msg","yes");
        map.put("artist", savedArtist);
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
    @PostMapping("/updateAlbumReorder")
    public HashMap<String, Object> updateAlbumReorder(@RequestBody List<Integer> musicIds, @RequestParam("albumId")int albumId) {
        HashMap<String, Object> map = new HashMap<>();
        ms.updateAlbumReorder(musicIds,albumId);
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
        List<Album>albumList=artist.getAlbums();
        for(Album album:albumList){
            List<Music>musicList=album.getMusicList();
            for(Music music:musicList){
                String s = music.getBucketPath().replace("https://d9k8tjx0yo0q5.cloudfront.net/","https://divestreaming.s3.ap-northeast-2.amazonaws.com/");
                ss.deleteFile(s);
            }
        }
        ms.deleteArtist(artist);
        map.put("msg","yes");
        return map;
    }
    @DeleteMapping("/deleteAlbum")
    public HashMap<String, Object> deleteAlbum(@RequestBody Album album) {
        HashMap<String, Object> map = new HashMap<>();
        List<Music> musicList=album.getMusicList();
        for (Music music : musicList) {
            String s = music.getBucketPath().replace("https://d9k8tjx0yo0q5.cloudfront.net/","https://divestreaming.s3.ap-northeast-2.amazonaws.com/");
            ss.deleteFile(s);
        }
        ms.deleteAlbum(album);
        map.put("msg","yes");
        return map;
    }
    @DeleteMapping("/deleteMusic")
    public HashMap<String, Object> deleteMusic(@RequestBody Music music) {
        HashMap<String, Object> map = new HashMap<>();
        String s = music.getBucketPath().replace("https://d9k8tjx0yo0q5.cloudfront.net/","https://divestreaming.s3.ap-northeast-2.amazonaws.com/");
        ss.deleteFile(s);
        ms.deleteMusic(music);
        map.put("msg","yes");
        return map;
    }
    @Autowired
    S3Service ss;
    @PostMapping("/musicUpload")
    public HashMap<String, Object> musicUpload(@RequestParam("music") MultipartFile file) {
        HashMap<String, Object> map = new HashMap<>();
        try {
            String uploadFilePath=ss.saveFile(file,"music");
            map.put("music",uploadFilePath);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return map;
    }
    @PostMapping("/imageUpload")
    public HashMap<String, Object> imageUpload(@RequestParam("image") MultipartFile file) {
        HashMap<String, Object> map = new HashMap<>();
        try {
            String uploadFilePath=ss.saveFile(file,"image");
            map.put("image",uploadFilePath);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return map;
    }


    //=====================================================

    @PostMapping("/insertPlaylist")
    public HashMap<String, Object> insertPlayList(@AuthenticationPrincipal User user) {
        HashMap<String, Object> map = new HashMap<>();
        ms.insertPlayList(user.getUsername());
        map.put("msg","yes");
        return map;
    }
    //음악을 제외한 다른내용들 수정
    @PostMapping("/updatePlaylist")
    public HashMap<String, Object> updatePlayList(@RequestBody Playlist playlist) {
        HashMap<String, Object> map = new HashMap<>();
        ms.updatePlaylist(playlist);
        map.put("msg","yes");
        return map;
    }

    @PostMapping("/updatePlaylistAddMusic")
    public HashMap<String, Object> updatePlaylistAddMusic(@RequestParam("playlistId")int playlistId, @RequestBody List<Integer> musicId) {
        HashMap<String, Object> map = new HashMap<>();
        ms.updatePlaylistAddMusic(playlistId,musicId);
        map.put("msg","yes");
        return map;
    }

    @PostMapping("/updatePlaylistReorder")
    public HashMap<String,Object> updatePlaylistReorder(@RequestParam("playlistId")int playlistId, @RequestBody List<Integer> musicIds) {
        HashMap<String, Object> map = new HashMap<>();
        ms.updatePlaylistReorder(playlistId,musicIds);
        map.put("msg","yes");
        return map;
    }

    @PostMapping("/updatePlaylistDeleteMusic")
    public HashMap<String,Object> updatePlaylistDeleteMusic(@RequestParam("playlistId")int playlistId, @RequestParam("musicId")int musicId) {
        HashMap<String, Object> map = new HashMap<>();
        ms.updatePlaylistDeleteMusic(playlistId,musicId);
        map.put("msg","yes");
        return map;
    }

    @DeleteMapping("deletePlaylist")
    public HashMap<String, Object> deletePlaylist(@RequestParam("PlaylistId")int playlistId) {
        HashMap<String, Object> map = new HashMap<>();
        ms.deletePlaylist(playlistId);
        map.put("msg","yes");
        return map;
    }


    //음악 재생수 증가메서드
    @PostMapping("/addPlayCount")
    public HashMap<String, Object> addPlayCount(@RequestBody HashMap<Integer,Integer> playCount,@RequestParam(value = "memberId",required = false)String memberId) {
        System.out.println(playCount);
        if(memberId==null) {memberId="";}
        HashMap<String, Object> map = new HashMap<>();
        ms.addPlayCount(playCount,memberId);
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
    @GetMapping("/getAllMusic")
    public HashMap<String, Object> getAllMusic() {
        HashMap<String, Object> map = ms.getAllMusic();
        return map;
    }

    @GetMapping("/getSearch")
    public HashMap<String, Object> getSearch(@RequestParam("key")String key) {
        HashMap<String, Object> map = ms.search(key);
        return map;
    }
    @GetMapping("/getAllArtist")
    public HashMap<String, Object> getAllArtist() {
        HashMap<String,Object> map= ms.getAllArtist();
        return map;
    }
    @GetMapping("/getAllAlbum")
    public HashMap<String, Object> getAllAlbum() {
        HashMap<String,Object> map= ms.getAllAlbum();
        return map;
    }

    @PostMapping("/getCurrentPlaylist")
    public HashMap<String, Object> getCurrentPlaylist(@RequestBody List<HashMap<String,Object>> playlist) {
        HashMap<String, Object> map = ms.getCurrentPlaylist(playlist);
        return map;
    }




}