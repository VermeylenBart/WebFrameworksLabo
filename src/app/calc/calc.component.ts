import { Component } from '@angular/core';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html'
})
export class CalcComponent {
  counter: number = 0;

  Increment():void{
    this.counter++;
  }
}
