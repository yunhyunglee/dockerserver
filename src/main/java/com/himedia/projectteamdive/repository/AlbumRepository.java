package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Album;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AlbumRepository extends JpaRepository<Album, Integer> {

    @Query("select a from Album a join a.musicList m group by a.albumId order by sum(m.playCount) desc ")
    List<Album> findTop10ByMusicPlayCount();
}
