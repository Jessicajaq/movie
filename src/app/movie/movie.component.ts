import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from '../movie.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',

  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  
  filme : Movie;
  filmes: Array<Movie>;

  constructor(private service : MovieService){}

  ngOnInit() {

    this.filme = new Movie;
    this.filmes = new Array<Movie>();
    this.service.getFilmes()
    .subscribe(resp => this.filmes = resp);
    
  }

  carregar(){
    this.service.getFilmes().subscribe(resp => this.filmes = resp);    
  }

}
