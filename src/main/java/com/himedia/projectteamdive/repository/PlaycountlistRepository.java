package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Playcountlist;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.sql.Timestamp;
import java.util.List;

public interface PlaycountlistRepository  extends JpaRepository<Playcountlist, Integer> {


    Playcountlist findByMusic_MusicIdAndIndate(int musicMusicId, Timestamp indate);

    @Query("select p.music,sum(p.playCount) from Playcountlist p where p.indate >= :thirtyDaysAgo group by p.music order by sum(p.playCount) desc ")
    List<Playcountlist> findTop100ByMusicChart(Timestamp thirtyDaysAgo, Pageable pageable);

    @Query("select p.music,sum(p.playCount) from Playcountlist p where p.indate >= :chartDays group by p.music order by sum(p.playCount) desc")
    List<Playcountlist> findTop100ByMusicWeekCart(Timestamp chartDays, Pageable pageable);

    @Query("select p.music,sum(p.playCount) from Playcountlist p where p.indate >= :chartDays and p.music.artist.country='korea' group by p.music order by sum(p.playCount) desc")
    List<Playcountlist> findTop100ByMusicChartKor(Timestamp chartDays, Pageable pageable);

    @Query("select p.music,sum(p.playCount) from Playcountlist p where p.indate >= :chartDays and p.music.artist.country<>'korea' group by p.music order by sum(p.playCount) desc")
    List<Playcountlist> findTop100ByMusicChartnoKor(Timestamp chartDays, Pageable pageable);
}
