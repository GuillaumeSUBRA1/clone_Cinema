package com.cinema.repository;

import com.cinema.entity.PictureEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PictureRepository extends JpaRepository<PictureEntity, Long> {
    Optional<PictureEntity> findByMovieId(Long id);
}
