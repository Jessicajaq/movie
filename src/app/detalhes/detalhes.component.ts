import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})

export class DetalhesComponent implements OnInit {

  id: string;
  filme: Movie;

  constructor(private route: ActivatedRoute, private service : MovieService) { }

  ngOnInit(){
    this.filme = new Movie();
    this.id = this.route.snapshot.paramMap.get('id'); 
    console.log(this.id);
    console.log(this.service.id(this.id).subscribe(resp => this.filme = resp));
  }

}
