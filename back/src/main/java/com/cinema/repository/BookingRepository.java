package com.cinema.repository;

import com.cinema.entity.BookingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository  extends JpaRepository<BookingEntity, Long> {
    List<BookingEntity> findAllByEmail(String email);
}
