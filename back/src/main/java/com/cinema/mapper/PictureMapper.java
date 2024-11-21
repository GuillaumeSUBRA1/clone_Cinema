package com.cinema.mapper;

import com.cinema.dto.PictureRecordDTO;
import com.cinema.entity.PictureEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.Set;

@Mapper(componentModel = "spring")
public interface PictureMapper {

    PictureRecordDTO entityToDTO(PictureEntity picture);
    PictureEntity dtoToEntity(PictureRecordDTO pictureDTO);

    @Named("get-cover")
    default PictureRecordDTO getCover(Set<PictureEntity> p) {
        return p.stream().findFirst().map(this::entityToDTO).orElse(null);
    }
}
