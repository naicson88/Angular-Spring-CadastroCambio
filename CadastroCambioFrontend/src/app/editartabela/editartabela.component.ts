import { Component, OnInit } from '@angular/core';
import { TabelaServiceService } from '../services/tabela-service.service';
import { Router } from '@angular/router';
import { Tabela } from '../classes/tabela';
import { $ } from 'protractor';


@Component({
  selector: 'app-editartabela',
  templateUrl: './editartabela.component.html',
  styleUrls: ['./editartabela.component.css']
})
export class EditartabelaComponent implements OnInit {

  constructor(private serviceTabela: TabelaServiceService) { }
 
  tabela: Tabela = new Tabela();

  ngOnInit() {
    this.Editar() 
  }

  Editar(){
    
    let id = localStorage.getItem("id");
    this.serviceTabela.getTabelaId(+id).subscribe(data =>{
      this.tabela = data;
      console.log(this.tabela = data)
    })
}

  atualizarTabela(tabela:Tabela){
    this.serviceTabela.editarTabela(tabela).subscribe(
      data=>{
        this.tabela = data;
        alert("Atualizado com sucesso!!");
        location.reload();
        window.opener.location.reload();
        window.close();  
      }
    )
  }
}
