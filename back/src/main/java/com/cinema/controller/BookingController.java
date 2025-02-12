package com.cinema.controller;

import com.cinema.dto.bookingDTO.NewBookingRecordDTO;
import com.cinema.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/booking")
public class BookingController {
    @Autowired
    BookingService bookingService;

    @PostMapping("/create")
    public ResponseEntity<HttpStatus> create(@RequestBody NewBookingRecordDTO newBookingRecordDTO) {
        bookingService.create(newBookingRecordDTO);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
