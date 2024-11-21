package com.cinema.dto.movieDTO;

import com.cinema.dto.AdminRecordDTO;
import com.cinema.dto.PictureRecordDTO;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public record MovieRecordDTO(

        @NotNull Long id,
        @NotNull AdminRecordDTO admin,
        @NotNull String title,
        String summary,
        List<PictureRecordDTO> pictures,
        @NotNull Integer duration,
        @NotNull String actors,
        @NotNull String gender,
        @NotNull String producer,
        @NotNull String release
) {
}
