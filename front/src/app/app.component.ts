import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { menuList } from './model/banniereModel';
import { BanniereComponent } from './banniere/banniere.component';

@Component({
  standalone: true,
  imports: [RouterModule, BanniereComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) { }

  route(onglet: number) {
    this.router.navigate([menuList[onglet]]);
  }
}
