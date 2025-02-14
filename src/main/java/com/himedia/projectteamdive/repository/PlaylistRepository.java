package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Playlist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaylistRepository extends JpaRepository<Playlist, Integer> {
    Object findByTitleContainingIgnoreCase(String title);

    Playlist findByPlaylistId(int playlistId);
}
