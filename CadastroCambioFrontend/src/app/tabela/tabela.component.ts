import { Component, OnInit } from '@angular/core';
import { TabelaServiceService } from '../tabela-service.service';
import { Router } from '@angular/router';
import { Tabela } from '../classes/tabela';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor(private serviceTabela: TabelaServiceService, private toastr: ToastrService) { }
  formData: Tabela
  tabela: Tabela[];
  tabelaObj: Tabela = new Tabela();

  ngOnInit() {
    this.serviceTabela.getListaTabela().subscribe(
      data => {
        console.log(this.tabela = data)
      } 
    ) 
    
  }

  Editar(tabela: Tabela){
    localStorage.setItem("id", tabela.id.toString());
    window.open (
    "http://localhost:4200/editartabela", 'page', 'width=540 height=675 left=600 top=300, resizable=no,menubar=no , titlebar=no');
  }  

  Deletar(tabela: Tabela){
    this.serviceTabela.deletarLinha(tabela).subscribe(data => {
      //Checa se o usuario quer mesmo deletar o item
      var resposta=confirm("Tem certeza que deseja deletar este item?");
      if (resposta == true){
        this.tabela = this.tabela.filter(t=>t!==tabela );
        this.toastr.error("Deletado com sucesso!!", '', {
        timeOut: 2000, 
        })
      } else {
        window.close;
      }
      
    })
  }
}
