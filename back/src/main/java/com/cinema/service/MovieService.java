package com.cinema.service;

import com.cinema.dto.movieDTO.DisplayMovieCardRecordDTO;
import com.cinema.dto.movieDTO.MovieRecordDTO;
import com.cinema.entity.MovieEntity;
import com.cinema.mapper.MovieMapper;
import com.cinema.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class MovieService {

    @Autowired
    MovieRepository movieRepository;

    @Autowired
    MovieMapper movieMapper;

    public Page<DisplayMovieCardRecordDTO> getAll(Pageable p){
        Page<MovieEntity> page = movieRepository.findAllCoverOnly(p);
        return page.map(movieMapper::entityToDisplayCardListingDTO);
    }

    public MovieRecordDTO getOne(Long id){
        return movieMapper.movieToMovieDTO(movieRepository.findById(id).orElseThrow());
    }
}
