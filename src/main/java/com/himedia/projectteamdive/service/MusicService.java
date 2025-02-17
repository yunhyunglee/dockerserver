package com.himedia.projectteamdive.service;

import com.himedia.projectteamdive.entity.*;
import com.himedia.projectteamdive.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@EnableScheduling
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
        Album album= m.getAlbum();
        album.addAlbum(music);

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


    @Autowired
    MemberRecentMusicsRepository mrmr;
    public void addPlayCount(HashMap<Integer,Integer> playCount,String memberId) {
        playCount.forEach((musicId,playcountToday)->{
            Music music= mr.findByMusicId(musicId);
            if(music!=null) {

                MemberRecentMusics recentMusic=MemberRecentMusics.builder()
                        .member(memr.findByMemberId(memberId))
                        .musicId(musicId).build();
                mrmr.save(recentMusic);
                List<MemberRecentMusics> recentMusics=mrmr.findByMember_MemberIdOrderByIdAsc(memberId);
                if(recentMusics.size()>30){
                    MemberRecentMusics recentMusic2=recentMusics.get(0);
                    mrmr.delete(recentMusic2);
                }

                music.setPlayCount(music.getPlayCount()+ playcountToday);
                long currentTimeMillis = System.currentTimeMillis();
                Timestamp indate = new Timestamp(currentTimeMillis);

                LocalDateTime midnightLocalDateTime = indate.toLocalDateTime().toLocalDate().atStartOfDay();
                indate= Timestamp.valueOf(midnightLocalDateTime);

                Playcountlist playcountlist= pcr.findByMusicAndMemberIdAndIndate(music,memberId,indate);
                if(playcountlist==null){
                    Playcountlist playcountlist2=new Playcountlist(music,memberId,indate,1);
                    pcr.save(playcountlist2);
                }else{
                    playcountlist.setPlayCount(playcountlist.getPlayCount()+playcountToday);
                }
            }

        });
    }

    @Scheduled(cron = "0 0 0 * * ?")  // 매일 자정에 실행
    public void deleteOldPages() {
        LocalDate thirtyDaysAgo = LocalDate.now().minusDays(30);
        List<Playcountlist> oldPages = pcr.findAllByIndateBefore(thirtyDaysAgo);
        pcr.deleteAll(oldPages);
    }


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


    public Artist getArtist(int artistId) {
        return arr.findByArtistId(artistId);
    }

    public Album getAlbum(int albumId) {
        return  ar.findByAlbumId(albumId);
    }

    public Music getMusic(int musicId) {
        return  mr.findByMusicId(musicId);
    }

    public HashMap<String, Object> search(String key) {
        HashMap<String, Object> result=new HashMap<>();
        result.put("artist",arr.findByArtistNameContainingIgnoreCase("%"+key+"%"));
        result.put("album",ar.findByTitleContainingIgnoreCase("%"+key+"%"));
        result.put("music",mr.findByTitleContainingIgnoreCase("%"+key+"%"));
        result.put("musiclyrics",mr.findByLyricsContainingIgnoreCase("%"+key+"%"));
        result.put("playlist",pr.findByTitleContainingIgnoreCase("%"+key+"%"));
        return result;
    }

    public void updateArtist(Artist artist) {
        Artist a=arr.findByArtistId(artist.getArtistId());
        a.setArtistName(artist.getArtistName());
        a.setDebut(artist.getDebut());
        a.setCountry(artist.getCountry());

    }

    public void updateAlbum(Album album) {
        Album a=ar.findByAlbumId(album.getAlbumId());
        a.setArtist(album.getArtist());
        a.setImage(album.getImage());
        a.setTitle(album.getTitle());
        a.setIndate(album.getIndate());
    }


    public void updateMusic(Music music) {
        Music m=mr.findByMusicId(music.getMusicId());
        m.setAlbum(music.getAlbum());
        m.setTitle(music.getTitle());
        m.setImage( music.getImage());
        m.setGenre(music.getGenre());
        m.setLyrics(music.getLyrics());
        m.setTitleMusic(music.isTitleMusic());
    }

    public void deleteArtist(Artist artist) {
        arr.delete(artist);
    }

    public void deleteAlbum(Album album) {
        ar.delete(album);
    }

    public void deleteMusic(Music music) {
        mr.delete(music);
    }

    public void deletePlaylist(int playlistId) {
        Playlist playlist=pr.findByPlaylistId(playlistId);
        pr.delete(playlist);
    }

    public void updatePlaylist(Playlist playlist) {
        Playlist p=pr.findByPlaylistId(playlist.getPlaylistId());
        p.setTitle(playlist.getTitle());
        p.setShayringyn(playlist.isShayringyn());
    }

    @Transactional
    public void updatePlaylistAddMusic(int playlistId, List<Integer> musics) {
        Playlist playlist=pr.findByPlaylistId(playlistId);
        for (int musicId : musics) {
            Music music=mr.findByMusicId(musicId);
            playlist.addMusic(music);
        }

    }

    public void updatePlaylistDeleteMusic(int playlistId, int musicId) {
        Playlist playlist=pr.findByPlaylistId(playlistId);
        Music music=mr.findByMusicId(musicId);
        playlist.removeMusic(music);
    }

    public void updateAlbumReorder(List<Integer> musicIds, int albumId) {
        Album album=ar.findByAlbumId(albumId);
        List<Music> updatedMusicList =musicIds.stream().map(musicid -> mr.findByMusicId(musicid)).collect(Collectors.toList());
        album.setMusicList(updatedMusicList);
        album.reorderMusicList();
    }

    public void updatePlaylistReorder(int playlistId, List<Integer> musicIds) {
        Playlist playlist=pr.findByPlaylistId(playlistId);
        List<Music> updatedMusicList = musicIds.stream().map(musicid -> mr.findByMusicId(musicid)).collect(Collectors.toList());
        playlist.setMusicList(updatedMusicList);
    }

    public HashMap<String, Object> getAllMusic() {
        HashMap<String, Object> result=new HashMap<>();
        result.put("music",mr.findAll());
        return result;
    }

    public HashMap<String, Object> getAllArtist() {
        HashMap<String, Object> result=new HashMap<>();
        result.put("artist",arr.findAll());
        return result;
    }

    public HashMap<String, Object> getAllAlbum() {
        HashMap<String, Object> result=new HashMap<>();
        result.put("album",arr.findAll());
        return result;
    }
}
