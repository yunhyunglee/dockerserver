package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Playlist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayListRepository extends JpaRepository<Playlist, Integer> {
}
