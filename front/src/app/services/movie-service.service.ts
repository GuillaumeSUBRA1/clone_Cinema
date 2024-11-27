import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { DisplayMovie, DisplayMovieCard } from '../model/movie.model';
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

  private getMovieWritable: WritableSignal<State<DisplayMovie, HttpErrorResponse>> = signal(State.Builder<DisplayMovie, HttpErrorResponse>().forInit());
  getMovieSignal = computed(() => this.getMovieWritable());


  findAll(pageRequest: Pagination) {
    let params = createPaginationOption(pageRequest);
    return this.http.get<Page<DisplayMovieCard>>( `${environment.API_URL}/movie/all`, {params})
      .subscribe({
        next: s => this.getAllMoviesWritable.set(State.Builder<Page<DisplayMovieCard>, HttpErrorResponse>().forSuccess(s)),
        error: e => this.getAllMoviesWritable.set(State.Builder<Page<DisplayMovieCard>, HttpErrorResponse>().forError(e))
      });
  }

  findOne(id:number) {
    let params = new HttpParams().set("id", id);
    return this.http.get<DisplayMovie>( `${environment.API_URL}/movie/get-one`, {params})
      .subscribe({
        next: s => this.getMovieWritable.set(State.Builder<DisplayMovie, HttpErrorResponse>().forSuccess(s)),
        error: e => this.getMovieWritable.set(State.Builder<DisplayMovie, HttpErrorResponse>().forError(e))
      });
  }

  resetFindOne() {
    this.getMovieWritable.set(State.Builder<DisplayMovie>().forInit());
  }
}
