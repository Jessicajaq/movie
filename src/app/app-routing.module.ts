import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { DetalhesComponent } from './detalhes/detalhes.component'
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ApiComponent } from './api/api.component';

const routes: Routes = [
  {path: 'home', component: MovieComponent},
  {path: '', redirectTo: "home", pathMatch: "full"},
  {path: 'detalhes/:id', component: DetalhesComponent},
  {path: 'pesquisa/:titulo', component: PesquisaComponent},
  {path: 'api/:titulo', component: ApiComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
