package com.subra.service;

import com.subra.bean.FilmBean;
import com.subra.mapper.FilmMapper;
import com.subra.repository.FilmRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmService {
    private FilmRepository filmRepository;

    private FilmMapper filmMapper;

    public List<FilmBean> getAll(){
        return this.filmMapper.filmListToFilmBeanList(this.filmRepository.findAll());
    }
}
