package com.cinema.mapper;

import com.cinema.dto.movieDTO.DisplayMovieCardRecordDTO;
import com.cinema.dto.movieDTO.MovieRecordDTO;
import com.cinema.entity.MovieEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = {PictureMapper.class})
public interface MovieMapper {

    MovieEntity movieDTOToMovie(MovieRecordDTO movieDTO);
    List<MovieEntity> movieDTOListToMovieList(List<MovieRecordDTO> movieDTO);

    MovieRecordDTO movieToMovieDTO(MovieEntity movie);
    List<MovieRecordDTO> movieListToMovieDTOList(List<MovieEntity> movie);
    List<DisplayMovieCardRecordDTO> movieListToDiplayMovieCardDTOList(List<MovieEntity> movie);

    @Mapping(target = "cover", source = "pictures", qualifiedByName = "get-cover")
    DisplayMovieCardRecordDTO entityToDisplayCardListingDTO(MovieEntity listing);

}
