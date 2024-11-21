package com.cinema.dto.movieDTO;

import com.cinema.dto.PictureRecordDTO;
import jakarta.validation.constraints.NotNull;
import org.springframework.lang.Nullable;

import java.util.List;

public record DisplayMovieCardRecordDTO(
        @NotNull Long id,
        @NotNull String title,
        @Nullable PictureRecordDTO cover
) {
}
