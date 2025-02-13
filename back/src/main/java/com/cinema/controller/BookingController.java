package com.cinema.controller;

import com.cinema.dto.bookingDTO.NewBookingRecordDTO;
import com.cinema.dto.bookingDTO.SearchBookingDTO;
import com.cinema.repository.BookingRepository;
import com.cinema.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    BookingService bookingService;

    @PostMapping("/create")
    public ResponseEntity<HttpStatus> create(@RequestBody NewBookingRecordDTO newBookingRecordDTO) {
        bookingService.create(newBookingRecordDTO);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/get-by-email")
    public ResponseEntity<List<SearchBookingDTO>> getAllByEmail(@RequestParam String email) {
        return ResponseEntity.ok(bookingService.getAllByEmail(email));
    }

    @DeleteMapping("/delete")
    public  ResponseEntity<HttpStatus> delete(@RequestParam Long id) {
        bookingRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
