package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Music;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MusicRepository extends JpaRepository<Music, Integer> {

    Music findByMusicId(int musicId);

    List<Music> findByTitleContainingIgnoreCase(String title);

    Object findByLyricsContainingIgnoreCase(String lyrics);

//    @Query("SELECT m FROM Music m WHERE m.musicId IN :ids ORDER BY m.tracknumber ASC")
//    List<Music> findAllByMusicId(@Param("ids") List<Integer> ids);


//    @Modifying
//    @Query("update Music m set m.playCountDay=0")
//    void resetPlayCountDay();
//
//    @Modifying
//    @Query("update Music m set m.playCountWeek=0")
//    void resetPlayCountWeek();
//
//    @Modifying
//    @Query("update Music m set m.playCountMonth=0")
//    void resetPlayCountMonth();

}
