import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PesquisaService } from '../pesquisa.service';
import { ApiArray } from './apiarray';
import { Search } from './Search';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  api: Array<ApiArray>;
  filmes: Array<Search>;  
  titulo:string;

  constructor(private route: ActivatedRoute, private service: PesquisaService) { }

  ngOnInit() {
    this.api = new Array<ApiArray>();
    this.filmes = new Array<Search>();
    this.titulo = this.route.snapshot.paramMap.get('titulo');
    this.service.rodarAPI(this.titulo).subscribe(resp => this.filmes = resp);
    console.log("Buscando na API: " + this.titulo);
  }



}
