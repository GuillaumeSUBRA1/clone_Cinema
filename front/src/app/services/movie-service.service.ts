import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { DisplayMovieCard, IMovie } from '../model/movie.model';
import { State } from '../model/state.model';
import { environment } from 'src/environments/environment';
import { createPaginationOption, Page, Pagination } from '../model/request.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  http = inject(HttpClient);

  private getAllMoviesWritable: WritableSignal<State<Page<DisplayMovieCard>, HttpErrorResponse>> = signal(State.Builder<Page<DisplayMovieCard>, HttpErrorResponse>().forInit());
  getAllMoviesSignal = computed(() => this.getAllMoviesWritable());

  private getMovieSignal: WritableSignal<State<IMovie, HttpErrorResponse>> = signal(State.Builder<IMovie, HttpErrorResponse>().forInit());
  getMovie = computed(() => this.getMovieSignal());


  findAll(pageRequest: Pagination) {
    let params = createPaginationOption(pageRequest);
    return this.http.get<Page<DisplayMovieCard>>( `${environment.API_URL}/movie/all`, {params})
      .subscribe({
        next: s => this.getAllMoviesWritable.set(State.Builder<Page<DisplayMovieCard>, HttpErrorResponse>().forSuccess(s)),
        error: e => this.getAllMoviesWritable.set(State.Builder<Page<DisplayMovieCard>, HttpErrorResponse>().forError(e))
      });
  }

  findOne(id:number) {
    const params = new HttpParams();
    params.set("id", id);
    return this.http.get<IMovie>( `${environment.API_URL}/movie/get-one`, {params})
      .subscribe({
        next: s => this.getMovieSignal.set(State.Builder<IMovie, HttpErrorResponse>().forSuccess(s)),
        error: e => this.getMovieSignal.set(State.Builder<IMovie, HttpErrorResponse>().forError(e))
      });
  }
}
