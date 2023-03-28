import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  public nome = 'Diego';
  public dollars = 50;
  public checkDisable = false;
  public position: { x: number; y: number } = { x: 0, y: 0 };

  public addAge(): number {
    return (this.dollars -= 10);
  }

  public checkThings(): any {
    if (this.dollars <= 0) {
      return (this.checkDisable = true);
    }
  }

  public actualCash(value: number) {
    value = this.dollars;
    alert('You Have $' + value);
  }
  public addMoreCash() {
    alert('You stoled $50 from someone with success!!!');
    this.dollars += 50;
  }

  public mouseMoveTest(value: MouseEvent) {
    this.position.x = value.offsetX;
    this.position.y = value.offsetY;
  }
}
