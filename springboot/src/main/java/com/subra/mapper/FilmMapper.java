package com.subra.mapper;

import com.subra.bean.FilmBean;
import com.subra.entity.Film;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface FilmMapper {
    Film filmBeanToFilm(FilmBean filmBean);
    List<Film> filmBeanListToFilmList(List<FilmBean> filmBean);
    FilmBean filmToFilmBean(Film film);
    List<FilmBean> filmListToFilmBeanList(List<Film> film);
}
