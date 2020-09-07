import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tabela } from './classes/tabela';
import { TokenstorageService } from './tokenstorage.service';
import { isEmpty } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TabelaServiceService {
  formData : Tabela

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

   getTabelaId(id:number){
     return this.http.get<Tabela>(this.Url+"/"+id,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.tokenstorage.getToken()}`)
     })
   }

   editarTabela(tabela: Tabela){
     return this.http.put<Tabela>(this.Url+"/"+tabela.id, tabela,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.tokenstorage.getToken()}`)
     })
   }

   deletarLinha(tabela: Tabela){
     return this.http.delete<Tabela>(this.Url+"/"+tabela.id, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.tokenstorage.getToken()}`)
     })
   }

   //PEGA O VENDCIMENTO DOS PROXIMOS DEZ DIAS
   vencimentoHome(){

    return this.http.get<Tabela[]>(this.Url+"/pordia",{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.tokenstorage.getToken()}`)
     });
     
   }
}
