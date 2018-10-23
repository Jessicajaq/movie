import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  title = 'Avengers';
  filme : Movie;
  listFilmes:Array<Movie>;
  constructor(private service : MovieService){}

  ngOnInit() {
    this.filme = new Movie;
    this.listFilmes = new Array<Movie>();
    this.service.getFilmes().subscribe(Response => this.listFilmes = Response);
  }

}
