import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition = true;
  public conditionClick = true;
  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Digo Maxmo', idade: 21 },
    { nome: 'Samo Santis', idade: 22 },
    { nome: 'Andro Dragas', idade: 21 },
    { nome: 'Bren Artids', idade: 22 },
    { nome: 'Zixo Abqqt', idade: 21 },
    { nome: 'Lendo Tagaki', idade: 21 },
  ];
  public nome: String = 'digo';

  constructor() {}
  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 1000);
  }

  onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  onClickAdd() {
    this.list.push({ nome: 'nargas', idade: 20 });
  }
}
