import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    console.log('Init');
     this.service.listar().subscribe((listaPensamentos) => {
      console.log('listar');
      console.log(this.listaPensamentos);
      this.listaPensamentos = listaPensamentos
    })
  }

}
