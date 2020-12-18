import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { TokenstorageService } from '../services/tokenstorage.service';
import { Router } from '@angular/router';
import { TabelaServiceService } from '../services/tabela-service.service';
import { Tabela } from '../classes/tabela';
import * as $ from 'jquery';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private login :TokenstorageService, private serviceTabela: TabelaServiceService,) { }

  tabela: Tabela[];
  ultimosDias: Tabela[]
   somar:number;
  
  
  ngOnInit() {
    
    this.serviceTabela.vencimentoHome().subscribe(
      data => {
        console.log(this.tabela = data)
      } )

      this.serviceTabela.ultimosFechados().subscribe(
        data => {
          console.log(this.ultimosDias = data)
        }
      )
      
  }
//Renomeia a div que mostra a tabela detalhada de cambio dia entre MOSTRAR/ESCONDER
  colapseCheckDetalhado(){
    var btn = document.querySelector("#btnColapse");

    if (btn.innerHTML === ' Mostrar movimentação detalhada do cambio dia '){
        btn.innerHTML = ' Esconder movimentação detalhada do cambio dia '
      } else  {
        btn.innerHTML =' Mostrar movimentação detalhada do cambio dia '
      }
  }

  popupCnversor(){
    var newpopupWindow = window.open (" ", 'page', 'width=240 height=275 left=600 top=300, resizable=no,menubar=no , titlebar=no');
    newpopupWindow.document.write(
      '<iframe style="float: right" src="http://currencyrate.today/load-converter?&amp;lg=pt&amp;tz=-3s&amp;fm=USD&amp;to=BRL&amp;st=info&amp;lr=1&amp;rd=0"  width="220" height="258" frameborder="0" scrolling="no"> </iframe>'   
       
    )
  }

  //FUNÇÃO PARA SOMAR OS CAMBIOS A SEREM FECHADOS NOS PROX DEZ DIAS NA
    somarValoresMarcados(){
    var total = 0;
       $('.chk:checked').each(function(){
         total += parseFloat($(this).closest('tr').find('.valorInvoice').text().replace("$", "").replace(',', '')
         .replace(" ", ""));
        });
        
       $("#resultado").html("US$ " + total.toLocaleString('en-US', {maximumFractionDigits: 2, minimumFractionDigits: 2}));
     
  }

}
