import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabelaServiceService } from '../tabela-service.service';
import { Tabela } from '../classes/tabela';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  tabela: Tabela = new Tabela();

  constructor(private router: Router, private service: TabelaServiceService) { }

  ngOnInit() {
    
  }

  salvarNaTabela(){
    this.service.addInfoNaTabela(this.tabela).subscribe(
      data => {
        alert("Inserido com sucesso!!!");
        this.router.navigate(["/tabela"]);
      }
    )
  }
  
}
