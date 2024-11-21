import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DisplayMovieCard, IMovie } from 'src/app/model/movie.model';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

  movie = input.required<DisplayMovieCard>();

}
