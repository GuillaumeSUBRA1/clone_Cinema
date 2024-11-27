import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DisplayMovieComponent } from './accueil/display-movie/display-movie.component';

export const routes: Routes = [
    {
        path: '',
        component: AccueilComponent
    },
    {
        path: 'display',
        component: DisplayMovieComponent
    }
];
