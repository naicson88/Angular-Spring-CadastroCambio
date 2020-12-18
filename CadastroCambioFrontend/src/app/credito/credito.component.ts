import { Component, OnInit } from '@angular/core';
import { RecebimentoService } from '../services/recebimento.service';
import { ToastrService } from 'ngx-toastr';
import { Recebimento } from '../classes/recebimento';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

  constructor(private recebService: RecebimentoService, private toastr: ToastrService ) { }
  receb: Recebimento[];

  ngOnInit() {
    this.recebService.getListaTabela().subscribe(
      data => {
        console.log(this.receb = data);
      }
    )
  }

  Editar(receb: Recebimento){
    localStorage.setItem("id", receb.id.toString());
    window.open (
    "http://localhost:4200/editartabela", 'page', 'width=540 height=675 left=600 top=300, resizable=no,menubar=no , titlebar=no');
  }  

}
