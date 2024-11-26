import { Component, effect, inject, OnInit } from '@angular/core';
import { DisplayMovie, DisplayMovieCard } from 'src/app/model/movie.model';
import { Pagination } from 'src/app/model/request.model';
import { StatusNotificationEnum } from 'src/app/model/state.model';
import { MovieService } from 'src/app/services/movie-service.service';
import { MovieCardComponent } from './movie-card/movie-card.component';

@Component({
  standalone: true,
  imports: [ MovieCardComponent],
  selector: 'grid-films',
  templateUrl: './grid-films.component.html',
  styleUrl: './grid-films.component.scss'
})
export class GridFilmsComponent implements OnInit {

  movieService = inject(MovieService);

  movies?: Array<DisplayMovieCard>;
  movie?: DisplayMovie;
  pageRequest: Pagination = { size: 20, page: 0, sort: [] };

  constructor() {
    this.listenGetMovies();
    this.listenGetMovie();
  }

  ngOnInit(): void {
    this.movieService.findAll(this.pageRequest);
  }

  listenGetMovies() {
    effect(() => {
      const state = this.movieService.getAllMoviesSignal();
      if (state.status === StatusNotificationEnum.OK) {
        this.movies = state.value?.content;
      }
    });
  }

  listenGetMovie() {
    effect(() => {
      const state = this.movieService.getMovie();
      if (state.status === StatusNotificationEnum.OK) {
        this.movie = state.value!;
      }
    });
  }

}
