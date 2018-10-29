import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie/movie';
import { EventEmitterService } from './event-emitter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title = 'movies';
  filme : Movie;
  titulo : string;

  constructor(private service : MovieService, private emitter: EventEmitterService){}

  ngOnInit(){
    this.filme = new Movie();
  }

  pesquisar(){
    this.service.salvarFilme(this.titulo).subscribe(resp => this.filme = resp);
    console.log(this.filme);
  }

  

}
