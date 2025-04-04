package com.cinema.dto;

import jakarta.validation.constraints.NotNull;
import java.util.Date;

public record SessionRecordDTO(
        @NotNull Long id,
        @NotNull Long movie,
        @NotNull Date startTime,
        @NotNull Date endTime
) {
}
