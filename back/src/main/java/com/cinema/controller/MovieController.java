package com.cinema.controller;

import com.cinema.dto.movieDTO.DisplayMovieCardRecordDTO;
import com.cinema.dto.movieDTO.MovieRecordDTO;
import com.cinema.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/movie")
public class MovieController {
    @Autowired
    MovieService movieService;

    @GetMapping("/all")
    public ResponseEntity<Page<DisplayMovieCardRecordDTO>> getFilms(Pageable p) {
        return ResponseEntity.ok(movieService.getAll(p));
    }

    @GetMapping("/get-one")
    public ResponseEntity<MovieRecordDTO> getFilm(@RequestParam("id") String id) {
        System.out.println("id = " + id);
        MovieRecordDTO m = movieService.getOne(Long.parseLong(id));
        System.out.println(m.toString());
        return ResponseEntity.ok(movieService.getOne(Long.parseLong(id)));
    }
}
