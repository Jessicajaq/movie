import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Movie } from './movie/movie';
import { Router } from '@angular/router';
import { PesquisaArray } from './pesquisa/pesquisaarray';
const URL = 'http://localhost:8080/filme/';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

    constructor(public http: HttpClient){}

    getFilmes():Observable<Movie[]>{
      let requisicao = "buscar";
      console.log(URL + requisicao);
       return this.http.get<Movie[]>(URL + requisicao);
     }

   salvarFilme(nome : string):Observable<Movie>{
        let requisicao = '/pesquisar?title=';
        return this.http.get<Movie>(URL + requisicao + nome);
   }

   id(id : string):Observable<Movie>{
     let requisicao = 'id?id=' + id;
     return this.http.get<Movie>(URL + requisicao);
   }
}
