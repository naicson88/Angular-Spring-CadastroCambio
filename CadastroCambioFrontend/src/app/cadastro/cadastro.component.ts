import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabelaServiceService } from '../services/tabela-service.service';
import { Tabela } from '../classes/tabela';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  tabela: Tabela = new Tabela();

  constructor(private router: Router, private service: TabelaServiceService, 
    private toastr: ToastrService) { }

  ngOnInit() {
    
  }
  
  salvarNaTabela(){
    this.service.addInfoNaTabela(this.tabela).subscribe(
      data => {
        this.toastr.success('Cadastrado com sucesso!','',{
          timeOut: 2000,
        })
        
      }
    )
  }
  
}
