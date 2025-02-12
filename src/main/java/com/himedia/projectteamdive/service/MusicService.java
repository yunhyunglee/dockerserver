package com.himedia.projectteamdive.service;

import com.himedia.projectteamdive.entity.*;
import com.himedia.projectteamdive.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;

@Service
@Transactional
public class MusicService {
    @Autowired
    MusicRepository mr;
    @Autowired
    AlbumRepository ar;
    @Autowired
    ArtistRepository arr;
    @Autowired
    PlaylistRepository pr;
    @Autowired
    AllpageRepository allr;
    @Autowired
    PlaycountlistRepository pcr;

    public void insertMusic(Music music) {
        Music m=mr.save(music);
        Allpage allpage=new Allpage();
        allpage.setEntityId(m.getMusicId());
        allpage.setPagetype(Arrays.asList(Pagetype.MUSIC));
        allr.save(allpage);
    }

    public void insertAlbum(Album album) {
        Album a=ar.save(album);
        Allpage allpage=new Allpage();
        allpage.setEntityId(a.getAlbumId());
        allpage.setPagetype(Arrays.asList(Pagetype.ALBUM));
        allr.save(allpage);
    }

    public void insertArtist(Artist artist) {
        Artist a=arr.save(artist);
        Allpage allpage=new Allpage();
        allpage.setEntityId(a.getArtistId());
        allpage.setPagetype(Arrays.asList(Pagetype.ARTIST));
        allr.save(allpage);
    }

    @Autowired
    MemberRepository memr;
    public void insertPlayList(String username) {
        Member member = memr.findByMemberId(username);
        Playlist playList= pr.save(new Playlist());
        playList.setMember(member);
        Allpage allpage=new Allpage();
        allpage.setEntityId(playList.getPlaylistId());
        allpage.setPagetype(Arrays.asList(Pagetype.PLAYLIST));
        allr.save(allpage);
    }

    @Transactional
    public void insertPlayListMusic(List<Music> musics, Playlist playList) {
        for (Music music : musics) {
            playList.addMusic(music);
        }
        pr.save(playList);
    }

    public void addPlayCount(HashMap<Integer,Integer> playCount) {
        playCount.forEach((k,v)->{
            Music music= mr.findByMusicId(k);
            if(music!=null) {
                music.setPlayCount(music.getPlayCount()+ v);
                long currentTimeMillis = System.currentTimeMillis();
                Timestamp indate = new Timestamp(currentTimeMillis);
                Playcountlist playcountlist= pcr.findByMusic_MusicIdAndIndate(k,indate);
                if(playcountlist==null){
                    Playcountlist playcountlist2=new Playcountlist(music,indate,1);
                    pcr.save(playcountlist2);
                }else{
                    playcountlist.setPlayCount(playcountlist.getPlayCount()+v);
                }
            }

        });
    }
    // 자정에 playCountDay를 초기화
    @Scheduled(cron = "0 0 0 * * *") // 매일 자정
    public void resetPlayCountDay() {
        mr.resetPlayCountDay();
    }

    public HashMap<String, Object> getMusicChart() {
        HashMap<String, Object> chart=new HashMap<>();
        long currentTimeMillis = System.currentTimeMillis();
        Calendar calendar = Calendar.getInstance();
        calendar.setTimeInMillis(currentTimeMillis);
        calendar.add(Calendar.DAY_OF_MONTH, -30);  // 30일 전으로 설정
        Timestamp thirtyDaysAgo = new Timestamp(calendar.getTimeInMillis());
        chart.put("Top100",pcr.findTop100ByMusicChart(thirtyDaysAgo));
//        chart.put("Top100Day",pcr.find)

        return chart;
    }

    public List<Album> getAlbumChart() {
        return ar.findTop10ByMusicPlayCount();
    }


}
