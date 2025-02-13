package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Music;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MusicRepository extends JpaRepository<Music, Integer> {

    Music findByMusicId(int musicId);

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
