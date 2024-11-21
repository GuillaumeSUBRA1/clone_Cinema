import { Component } from '@angular/core';
import { GridFilmsComponent } from './grid-films/grid-films.component';

@Component({
  standalone: true,
  imports: [ GridFilmsComponent],
  selector: 'accueil-component',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  show = false;
  color = "#ff55ff";

  showDiv() {
    this.show = !this.show;
    this.color = this.show ? "accent" : "warn";
  }
}
