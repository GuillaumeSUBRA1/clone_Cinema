package com.subra.service;

import com.subra.entity.Film;
import com.subra.mapper.FilmMapper;
import com.subra.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmService {

    @Autowired
    private FilmRepository filmRepository;

    private FilmMapper filmMapper;

    public List<Film> getAll(){
        return this.filmRepository.findAll();
    }
}
