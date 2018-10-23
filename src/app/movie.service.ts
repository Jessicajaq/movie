import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Movie } from './movie/movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  URL_API = 'http://localhost:8080/filme/';
    constructor(public http: HttpClient){}
   buscarFilme(nome : String):Observable<Movie>{
        let requisicao = 'previsao?title=';
        return this.http.get<Movie>(this.URL_API + requisicao + nome);
   }

   getFilmes():Observable<Movie[]>{
    let requisicao = "buscar";
    console.log(this.URL_API + requisicao);
     return this.http.get<Movie[]>(this.URL_API + requisicao);
   }
}
