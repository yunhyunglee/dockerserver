package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Artist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArtistRepository extends JpaRepository<Artist, Integer> {
    Artist findByArtistId(int artistId);

    List<Artist> findByArtistNameContaining(String artistName);

    List<Artist> findByArtistNameContainingIgnoreCase(String artistName);
}
