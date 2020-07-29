import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
//Renomeia a div que mostra a tabela detabalha de cambio dia entre MOSTRAR/ESCONDER
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

}
