import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
    favorito: false

  }

  @Input() listaFavoritos: Pensamento[] = []

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >=256) {
        return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFayorito(): string {
    if(this.pensamento.favorito == false)
      return 'inativo'

    return 'ativo'
  }

  atualizarFavoritos(){
    this.service.mudarFavorito(this.pensamento).subscribe(() => {
      console.log(this.listaFavoritos)
      console.log(this.listaFavoritos.indexOf(this.pensamento))
      console.log(this.pensamento)
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
    });
  }
}
