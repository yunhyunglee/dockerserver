package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Playcountlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.sql.Timestamp;
import java.util.List;

public interface PlaycountlistRepository  extends JpaRepository<Playcountlist, Integer> {


    Playcountlist findByMusic_MusicIdAndIndate(int musicMusicId, Timestamp indate);

    @Query("select p.music,sum(p.playCount) from Playcountlist p where p.indate >= :thirtyDaysAgo group by p.music")
    List<Playcountlist> findTop100ByMusicChart(Timestamp thirtyDaysAgo);
}
