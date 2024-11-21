package com.cinema.dto;

import jakarta.validation.constraints.NotNull;
import org.springframework.lang.Nullable;

public record PictureRecordDTO(
    @NotNull Long id,
    @Nullable String link,
    @Nullable byte[] fileContent,
    @Nullable String fileContentType,
    @NotNull boolean isCover
) {}
