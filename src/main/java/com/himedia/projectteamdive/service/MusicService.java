package com.himedia.projectteamdive.service;

import com.himedia.projectteamdive.entity.*;
import com.himedia.projectteamdive.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.time.LocalDateTime;
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
        playCount.forEach((musicId,playcountToday)->{
            Music music= mr.findByMusicId(musicId);
            if(music!=null) {
                music.setPlayCount(music.getPlayCount()+ playcountToday);
                long currentTimeMillis = System.currentTimeMillis();
                Timestamp indate = new Timestamp(currentTimeMillis);

                LocalDateTime midnightLocalDateTime = indate.toLocalDateTime().toLocalDate().atStartOfDay();
                indate= Timestamp.valueOf(midnightLocalDateTime);

                Playcountlist playcountlist= pcr.findByMusic_MusicIdAndIndate(musicId,indate);
                if(playcountlist==null){
                    Playcountlist playcountlist2=new Playcountlist(music,indate,1);
                    pcr.save(playcountlist2);
                }else{
                    playcountlist.setPlayCount(playcountlist.getPlayCount()+playcountToday);
                }
            }

        });
    }
//    // 자정에 playCountDay를 초기화
//    @Scheduled(cron = "0 0 0 * * *") // 매일 자정
//    public void resetPlayCountDay() {
//        mr.resetPlayCountDay();
//    }

    public HashMap<String, Object> getMusicChart() {
        HashMap<String, Object> chart=new HashMap<>();
        Pageable pageable = PageRequest.of(0, 100); // 100개 제한

        Timestamp chartDays = new Timestamp(System.currentTimeMillis() - (30L * 24 * 60 * 60 * 1000)); // 30일 전
        //월간차트
        chart.put("Top100Month",pcr.findTop100ByMusicChart(chartDays, pageable));
        //국내월간차트
        chart.put("Top100MonthKor",pcr.findTop100ByMusicChartKor(chartDays, pageable));
        //해외월간차트
        chart.put("Top100MonthnoKor",pcr.findTop100ByMusicChartnoKor(chartDays, pageable));

        chartDays = new Timestamp(System.currentTimeMillis() - (7L * 24 * 60 * 60 * 1000)); // 7일 전
        //주간차트
        chart.put("Top100Week",pcr.findTop100ByMusicWeekCart(chartDays, pageable));

        chartDays = new Timestamp(System.currentTimeMillis() - (24L * 60 * 60 * 1000)); // 1일 전
        //일간차트
        chart.put("Top100toDay",pcr.findTop100ByMusicWeekCart(chartDays, pageable));

        return chart;
    }

    public List<Album> getAlbumChart() {
        return ar.findTop10ByMusicPlayCount();
    }


}
