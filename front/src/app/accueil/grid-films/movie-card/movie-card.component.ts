import { Component, EventEmitter, input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DisplayMovieCard } from 'src/app/model/movie.model';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

  movie = input.required<DisplayMovieCard>();

  @Output() displayEvent = new EventEmitter<number>();

  displayMovie(id: number){
    this.displayEvent.emit(id);
  }

}
