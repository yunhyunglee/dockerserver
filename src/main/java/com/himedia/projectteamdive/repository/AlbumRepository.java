package com.himedia.projectteamdive.repository;

import com.himedia.projectteamdive.entity.Album;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AlbumRepository extends JpaRepository<Album, Integer> {

}
