package com.cinema.dto.bookingDTO;

import com.cinema.dto.PictureRecordDTO;
import com.cinema.dto.SessionRecordDTO;
import jakarta.validation.constraints.NotNull;
import org.springframework.lang.Nullable;

public record SearchBookingDTO(
        @NotNull Long id,
    @NotNull SessionRecordDTO session,
    @NotNull String email,
    @NotNull int seats,
    @Nullable PictureRecordDTO cover
) {
}
