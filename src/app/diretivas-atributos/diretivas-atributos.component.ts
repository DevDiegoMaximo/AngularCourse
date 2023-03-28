import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  public valor = false;
  ngOnInit(): void {
    setInterval(() => {
      if (!this.valor) this.valor = true;
      else this.valor = false;
    }, 2000);
  }
}
