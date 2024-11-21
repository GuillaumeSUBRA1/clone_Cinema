import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { menuList } from './model/banniere.model';
import { BanniereComponent } from './banniere/banniere.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './font-awesome-icons';

@Component({
  standalone: true,
  imports: [RouterModule, BanniereComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faIconLibrary = inject(FaIconLibrary);
  router = inject(Router);

  ngOnInit(): void {
      this.initIcons();
  }

  route(onglet: number) {
    this.router.navigate([menuList[onglet]]);
  }

  initIcons() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
