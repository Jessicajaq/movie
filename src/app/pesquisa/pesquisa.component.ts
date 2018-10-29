import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';
import { PesquisaService } from '../pesquisa.service';
import { ActivatedRoute } from '@angular/router';
import { PesquisaArray } from './pesquisaarray';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})

export class PesquisaComponent implements OnInit {

  filme : Movie;
  list : PesquisaArray;
  titulo: string;

  constructor(private route: ActivatedRoute, private service: PesquisaService) { }

  ngOnInit() {
    this.filme = new Movie();
    this.list = new PesquisaArray();
    this.titulo = this.route.snapshot.paramMap.get('titulo');
    this.service.rodarBanco(this.titulo).subscribe(resp => this.list = resp);
    this.buscarNoBanco();    
  }

   buscarNoBanco(){      
    console.log("Buscar no banco: " + this.titulo);
    console.log(this.list.Search);
   }

}
