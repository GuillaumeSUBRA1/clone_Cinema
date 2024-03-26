import { Component, OnInit } from '@angular/core';
import { FilmModel } from '../../model/fimModel';
import { FilmService } from '../../services/films-service.service';

@Component({
  selector: 'films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent  implements OnInit {
  films: FilmModel[] = [];
  columns: String[] = ['titre','resume','sortie'];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.findAll().subscribe(data => {
      this.films = data;
    })
  }
}
