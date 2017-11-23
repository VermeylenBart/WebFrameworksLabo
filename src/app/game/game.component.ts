import { Component } from '@angular/core';
import { GuessTheNumber, GuessResult } from '../Common/GuessTheNumber';
import { debug } from 'util';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})
export class GameComponent {

  max: number = 10;
  game: GuessTheNumber;
  guesses: Guess[] = [];

  constructor(){
    this.game = new GuessTheNumber(this.max);
  }

  DoGuess(value: number){
    if(value){
      let result = this.game.DoGuess(value);
      this.guesses.push(new Guess(this.game.Attempts, value, result));
      debugger;
    }
  }

}

class Guess{
  constructor(public Attempt: number, public Value: number, public Result: GuessResult){}

  get IsTooHigh():Boolean{
    return this.Result == GuessResult.TooHigh;
  }

  get IsTooLow(): boolean{
    return this.Result == GuessResult.TooLow;
  }

  get IsCorrect(): boolean{
    return this.Result == GuessResult.Correct;
  }
}

