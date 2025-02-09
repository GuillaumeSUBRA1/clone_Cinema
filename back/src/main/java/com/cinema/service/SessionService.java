package com.cinema.service;

import com.cinema.dto.SessionRecordDTO;
import com.cinema.mapper.SessionMapper;
import com.cinema.repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SessionService {
    @Autowired
    SessionRepository sessionRepository;

    @Autowired
    SessionMapper sessionMapper;

    public List<SessionRecordDTO> findAllByMovie(Long id){
        return sessionRepository.findAllByMovieId(id).stream().map(sessionMapper::entityToRecordDTO).collect(Collectors.toList());
    }
}
