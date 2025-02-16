package com.cinema.service;

import com.cinema.dto.bookingDTO.NewBookingRecordDTO;
import com.cinema.dto.bookingDTO.SearchBookingDTO;
import com.cinema.entity.BookingEntity;
import com.cinema.entity.PictureEntity;
import com.cinema.entity.SessionEntity;
import com.cinema.mapper.BookingMapper;
import com.cinema.mapper.PictureMapper;
import com.cinema.mapper.SessionMapper;
import com.cinema.repository.BookingRepository;
import com.cinema.repository.MovieRepository;
import com.cinema.repository.PictureRepository;
import com.cinema.repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookingService {

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    SessionRepository sessionRepository;

    @Autowired
    PictureRepository pictureRepository;

    @Autowired
    MovieRepository movieRepository;

    @Autowired
    BookingMapper bookingMapper;

    @Autowired
    SessionMapper sessionMapper;

    @Autowired
    PictureMapper pictureMapper;

    public void create(NewBookingRecordDTO newBookingRecordDTO) {
        BookingEntity b = bookingMapper.dtoToEntity(newBookingRecordDTO);
        bookingRepository.save(b);
    }

    public List<SearchBookingDTO> getAllByEmail(String email) {
        List<SearchBookingDTO> searchBookingDTOList = new ArrayList<>();
        List<BookingEntity> booking=bookingRepository.findAllByEmail(email);
        for(BookingEntity b : booking){
            SessionEntity session = sessionRepository.findById(b.getSession()).get();
            PictureEntity picture = pictureRepository.findByMovieId(session.getMovie().getId()).get();
            searchBookingDTOList.add(new SearchBookingDTO(b.getId(),sessionMapper.entityToRecordDTO(session),
                    email, b.getSeats(), pictureMapper.entityToDTO(picture)));
        }
        return searchBookingDTOList;
    }
}
