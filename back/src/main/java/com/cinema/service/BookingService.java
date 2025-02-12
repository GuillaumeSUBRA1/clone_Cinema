package com.cinema.service;

import com.cinema.dto.bookingDTO.BookingRecordDTO;
import com.cinema.dto.bookingDTO.NewBookingRecordDTO;
import com.cinema.entity.BookingEntity;
import com.cinema.mapper.BookingMapper;
import com.cinema.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    BookingMapper bookingMapper;

    public void create(NewBookingRecordDTO newBookingRecordDTO) {
        BookingEntity b = bookingMapper.dtoToEntity(newBookingRecordDTO);
        bookingRepository.save(b);
    }
}
