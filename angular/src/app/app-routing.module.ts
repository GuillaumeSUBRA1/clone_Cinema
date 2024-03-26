import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './material/accueil/accueil.component';

const routes: Routes = [
  { path: '', pathMatch : 'full', redirectTo:'accueil'},
   {path:'accueil',component:AccueilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
