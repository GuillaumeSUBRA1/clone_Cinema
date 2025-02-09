package com.cinema.controller;

import com.cinema.dto.SessionRecordDTO;
import com.cinema.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/session")
public class SessionController {

    @Autowired
    SessionService sessionService;

    @GetMapping("/by-movie")
    public ResponseEntity<List<SessionRecordDTO>> getSessionsByFilm(@RequestParam Long id){
        return ResponseEntity.ok(sessionService.findAllByMovie(id));
    }
}
