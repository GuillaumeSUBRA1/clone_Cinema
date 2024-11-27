import { Component, effect, inject, OnInit } from '@angular/core';
import { DisplayMovie, DisplayMovieCard } from 'src/app/model/movie.model';
import { Pagination } from 'src/app/model/request.model';
import { StatusNotificationEnum } from 'src/app/model/state.model';
import { MovieService } from 'src/app/services/movie-service.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [ MovieCardComponent],
  selector: 'grid-films',
  templateUrl: './grid-films.component.html',
  styleUrl: './grid-films.component.scss'
})
export class GridFilmsComponent implements OnInit {

  movieService = inject(MovieService);
  router = inject(Router);

  movies?: Array<DisplayMovieCard>;
  movie?: DisplayMovie;
  pageRequest: Pagination = { size: 20, page: 0, sort: [] };

  constructor() {
    this.listenGetMovies();
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

  displayMovie(id: number) {
    this.router.navigate(['display'], { queryParams: { id: id } });
  }
}
