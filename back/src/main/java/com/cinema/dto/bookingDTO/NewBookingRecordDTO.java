package com.cinema.dto.bookingDTO;

import jakarta.validation.Valid;

public record NewBookingRecordDTO(
        @Valid Long session,
        @Valid String email,
        @Valid int seats
) {
}
