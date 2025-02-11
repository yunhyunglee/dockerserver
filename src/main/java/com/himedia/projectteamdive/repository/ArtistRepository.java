package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Artist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtistRepository extends JpaRepository<Artist, Integer> {
}
