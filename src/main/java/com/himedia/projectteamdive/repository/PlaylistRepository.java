package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Playlist;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlaylistRepository extends JpaRepository<Playlist, Integer> {
    Object findByTitleContainingIgnoreCase(String title);

    @EntityGraph(attributePaths = {"musicList"})
    List<Playlist> findAllByMember_MemberId(String memberMemberId);

    Playlist findByPlaylistId(int playlistId);
}
