import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable, WritableSignal, computed, inject, signal } from "@angular/core";
import { NewBook, SearchBook } from "../model/booking.model";
import { environment } from "src/environments/environment";
import { DisplayMovieCard } from "../model/movie.model";
import { State } from "../model/state.model";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  http = inject(HttpClient);

  private getSearchBookWritable: WritableSignal<State<Array<SearchBook>, HttpErrorResponse>> = signal(State.Builder<Array<SearchBook>, HttpErrorResponse>().forInit());
  getSearchBookSignal = computed(() => this.getSearchBookWritable());


  create(book: NewBook) {
    return this.http.post(`${environment.API_URL}/booking/create`, book);
  }

  getSearchBook(email: string) {
    let params = new HttpParams().set('email', email);
    return this.http.get<Array<SearchBook>>(`${environment.API_URL}/booking/get-by-email`, { params }).subscribe({
      next: s => this.getSearchBookWritable.set(State.Builder<Array<SearchBook>, HttpErrorResponse>().forSuccess(s)),
      error: e => this.getSearchBookWritable.set(State.Builder<Array<SearchBook>, HttpErrorResponse>().forError(e))
    });
  }

  cancel(id: number) {
    let params = new HttpParams().set('id', id);
    return this.http.delete(`${environment.API_URL}/booking/delete`, { params });
  }
}