import { Component, effect, inject, input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { map } from 'rxjs';
import { DisplayMovie } from 'src/app/model/movie.model';
import { IPicture } from 'src/app/model/picture.model';
import { StatusNotificationEnum } from 'src/app/model/state.model';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'display-movie',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './display-movie.component.html',
  styleUrl: './display-movie.component.scss'
})
export class DisplayMovieComponent implements OnInit, OnDestroy {

  movieService = inject(MovieService);
  activatedRoute = inject(ActivatedRoute);

  movieId?: number;
  movie?: DisplayMovie;
  cover?: IPicture;

  loading = true;

  constructor() {
    this.listenGetMovie();
  }

  ngOnInit(): void {
    this.getIdFromRouter();
  }

  ngOnDestroy(): void {
    this.movieService.resetFindOne();
  }

  listenGetMovie() {
    effect(() => {
      const state = this.movieService.getMovieSignal();
      if (state.status === StatusNotificationEnum.OK) {
        this.movie = state.value!;
        if (this.movie.pictures !== null && this.movie.pictures.length !== 0) {
          this.cover = this.movie.pictures.filter(p => p.isCover).at(0);
        }
        this.loading = false;
      }
    });
  }

  getIdFromRouter() {
    this.activatedRoute.queryParams.pipe(
      map(p => p['id'])
    ).subscribe({
      next: id => this.fetchMovie(id)
    })
  }

  fetchMovie(id: number) {
    this.loading = true;
    this.movieId = id;
    this.movieService.findOne(id);
  }
}
