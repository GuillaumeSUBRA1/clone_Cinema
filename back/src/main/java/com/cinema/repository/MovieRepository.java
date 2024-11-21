package com.cinema.repository;

import com.cinema.entity.MovieEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends JpaRepository<MovieEntity, Long> {
    @Query("SELECT m FROM MovieEntity m LEFT JOIN FETCH m.pictures p WHERE p.isCover = true OR p IS NULL")
    Page<MovieEntity> findAllCoverOnly(Pageable p);

}
