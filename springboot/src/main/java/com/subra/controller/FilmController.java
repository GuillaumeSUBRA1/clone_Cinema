package com.subra.controller;

import com.subra.entity.Film;
import com.subra.repository.FilmRepository;
import com.subra.service.FilmService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/film")
@NoArgsConstructor
public class FilmController {

    @Autowired
    FilmRepository filmRepository;
    @Autowired
    FilmService filmService;

    @GetMapping("/all")
    public ResponseEntity<List<Film>> getFilms(){
        return ResponseEntity.ok(filmRepository.findAll());
    }

}
