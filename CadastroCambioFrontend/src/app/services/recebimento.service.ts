import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recebimento } from '../classes/recebimento';
import { Tabela } from '../classes/tabela';
import { TokenstorageService } from './tokenstorage.service';

@Injectable({
  providedIn: 'root'
})
export class RecebimentoService {

  receb : Recebimento

  constructor(private http: HttpClient, private tokenstorage: TokenstorageService) { }

   Url = 'http://localhost:8080/cambio/recebimento';
   head = new HttpHeaders().set('Authorization', `Bearer ${this.tokenstorage.getToken()}`)

   getListaTabela(){
     return this.http.get<Recebimento[]>(this.Url,{
      headers: this.head
     });
   }

   addInfoNaTabela(receb: Recebimento){
     return this.http.post<Recebimento>(this.Url, receb,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.tokenstorage.getToken()}`)
     } )
   }

   getTabelaId(id:number){
     return this.http.get<Recebimento>(this.Url+"/"+id,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.tokenstorage.getToken()}`)
     })
   }

   editarTabela(receb: Recebimento){
     return this.http.put<Recebimento>(this.Url+"/"+receb.id, receb,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.tokenstorage.getToken()}`)
     })
   }

   deletarLinha(receb: Recebimento){
     return this.http.delete<Recebimento>(this.Url+"/"+receb.id, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.tokenstorage.getToken()}`)
     })
   }


}
