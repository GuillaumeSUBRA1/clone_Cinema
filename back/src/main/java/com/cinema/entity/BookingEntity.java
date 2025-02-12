package com.cinema.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "booking")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "bookingGenerator")
    @SequenceGenerator(name = "bookingGenerator", sequenceName = "booking_generator", allocationSize = 1)
    Long id;

    String email;

    Long session;

    int seats;
}
