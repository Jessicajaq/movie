import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PesquisaArray } from './pesquisa/pesquisaarray';
import { ApiArray } from './api/apiarray';
import { Search } from './api/Search';

const URL = 'http://localhost:8080/filme/';

@Injectable({
  providedIn: 'root'
})

export class PesquisaService {

  constructor(public http: HttpClient) { }

  rodarBanco(titulo: string): Observable<PesquisaArray>{
    let requisicao = "pesquisarfilmes?titulo=" + titulo;
    console.log(URL + requisicao);
    return this.http.get<PesquisaArray>(URL + requisicao);
  }

  rodarAPI(titulo: string): Observable<Search[]>{
    let requisicao = "pesquisarapi?titulo=" + titulo;
    console.log(URL + requisicao);
    return this.http.get<Search[]>(URL+requisicao);
  }


}
