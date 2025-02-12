package com.cinema.mapper;

import com.cinema.dto.bookingDTO.BookingRecordDTO;
import com.cinema.dto.bookingDTO.NewBookingRecordDTO;
import com.cinema.entity.BookingEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface BookingMapper {
    BookingRecordDTO entityToDTO(BookingEntity bookingEntity);

    @Mapping(target = "id", ignore=true)
    BookingEntity dtoToEntity(NewBookingRecordDTO bookingRecordDTO);
}
