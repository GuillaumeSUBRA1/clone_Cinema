package com.cinema.mapper;

import com.cinema.dto.SessionRecordDTO;
import com.cinema.entity.SessionEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SessionMapper {

    @Mapping(target = "movie", source = "movie.id")
    SessionRecordDTO entityToRecordDTO(SessionEntity session);
}
