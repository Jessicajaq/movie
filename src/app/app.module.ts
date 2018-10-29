import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from '@angular/forms';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    DetalhesComponent,
    PesquisaComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
