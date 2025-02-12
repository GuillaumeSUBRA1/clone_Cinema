import { Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { map } from 'rxjs';
import { DisplayMovie } from 'src/app/model/movie.model';
import { IPicture } from 'src/app/model/picture.model';
import { StatusNotificationEnum } from 'src/app/model/state.model';
import { MovieService } from 'src/app/services/movie-service.service';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, NgModel } from '@angular/forms';
import { Session } from 'src/app/model/session.model';
import { SessionService } from 'src/app/services/session-service.service';
import { CommonModule } from '@angular/common';
import { BookingComponent } from "./booking/booking.component";
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'display-movie',
  standalone: true,
  imports: [ToastModule, CommonModule, FontAwesomeModule, CalendarModule, FormsModule, BookingComponent],
  providers: [MessageService],
  templateUrl: './display-movie.component.html',
  styleUrl: './display-movie.component.scss'
})
export class DisplayMovieComponent implements OnInit, OnDestroy {

  movieService = inject(MovieService);
  sessionService = inject(SessionService);
  activatedRoute = inject(ActivatedRoute);
  messageService = inject(MessageService);

  movieId?: number;
  movie?: DisplayMovie;
  cover?: IPicture;
  sessionSelected?: Session;

  selectedDate = new Date();
  today =  new Date();

  sessions: Array<Session> = [];
  sessionsDay: Array<Session> = [];

  loading = true;

  constructor() {
    this.listenGetMovie();
    this.listenGetSessions();
  }

  ngOnInit(): void {
    this.getIdFromRouter();
  }

  ngOnDestroy(): void {
    this.movieService.resetFindOne();
  }

  filterSessions(date: Date) {
    this.selectedDate = date;
    this.sessionsDay = this.sessions.filter((s) => this.isSameDay(new Date(s.startTime), date));
  }

  isSameDay(date1: Date, date2: Date) {
    return date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate();
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

  listenGetSessions() {
    effect(() => {
      const state = this.sessionService.getSessionsByMovieSignal();
      if (state.status === StatusNotificationEnum.OK) {
        this.sessions = state.value!;
        this.filterSessions(this.selectedDate);
        this.loading = false;
      }
    });
  }

  getIdFromRouter() {
    this.activatedRoute.queryParams.pipe(
      map(p => p['id'])
    ).subscribe({
      next: id => {
        this.fetchMovie(id);
        this.sessionService.findAllByMovie(id);
      }
    })
  }

  fetchMovie(id: number) {
    this.loading = true;
    this.movieId = id;
    this.movieService.findOne(id);
  }

  selectSession(s:Session){
    this.sessionSelected = s;
  }

  resetSession(success: boolean){
    this.sessionSelected = undefined;
    if(success){
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Reservation enregistrée' });
    }
  }
}
