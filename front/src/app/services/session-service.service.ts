import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable, inject, WritableSignal, signal, computed } from "@angular/core";
import { environment } from "src/environments/environment";
import { State } from "../model/state.model";
import { Session } from "../model/session.model";

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    http = inject(HttpClient);

    private getSessionsByMovieWritable: WritableSignal<State<Session[], HttpErrorResponse>> = signal(State.Builder<Session[], HttpErrorResponse>().forInit());
    getSessionsByMovieSignal = computed(() => this.getSessionsByMovieWritable());
  
    findAllByMovie(id: number) {
        let params = new HttpParams().set("id", id);
        console.log(`${environment.API_URL}/session/by-movie`);
        return this.http.get<Session[]>( `${environment.API_URL}/session/by-movie`, {params})
          .subscribe({
            next: s => {console.log("test 1");this.getSessionsByMovieWritable.set(State.Builder<Session[], HttpErrorResponse>().forSuccess(s));},
            error: e => {console.log("test 2");this.getSessionsByMovieWritable.set(State.Builder<Session[], HttpErrorResponse>().forError(e));}
          });
    }    
}