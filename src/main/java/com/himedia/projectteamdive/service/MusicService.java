package com.himedia.projectteamdive.service;

import com.himedia.projectteamdive.entity.*;
import com.himedia.projectteamdive.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
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
}
