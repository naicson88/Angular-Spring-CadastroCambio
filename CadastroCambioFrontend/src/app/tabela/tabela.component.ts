import { Component, OnInit } from '@angular/core';
import { TabelaServiceService } from '../tabela-service.service';
import { Router } from '@angular/router';
import { Tabela } from '../classes/tabela';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor(private serviceTabela: TabelaServiceService, private router: Router) { }
  
  tabela: Tabela[];

  ngOnInit() {
    this.serviceTabela.getListaTabela().subscribe(
      data => {
        console.log(this.tabela = data)
      }
    )
  }

}
