import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-diretivas-atributos></app-diretivas-atributos>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  public valor = 1;
  constructor() {}

  public adicionar(): number {
    return (this.valor += 1);
  }

  ngOnInit(): void {}
}
