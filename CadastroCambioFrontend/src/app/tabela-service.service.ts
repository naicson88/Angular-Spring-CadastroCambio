import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tabela } from './classes/tabela';
import { TokenstorageService } from './tokenstorage.service';

@Injectable({
  providedIn: 'root'
})
export class TabelaServiceService {

  constructor(private http: HttpClient, private tokenstorage: TokenstorageService) { }

   Url = 'http://localhost:8080/cambio/tabela';

   getListaTabela(){
     return this.http.get<Tabela[]>(this.Url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.tokenstorage.getToken()}`)
     });
   }

   addInfoNaTabela(tabela: Tabela){
     return this.http.post<Tabela>(this.Url, tabela,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.tokenstorage.getToken()}`)
     } )
   }
}
