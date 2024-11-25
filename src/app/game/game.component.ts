import { Component } from '@angular/core';
import { Game } from 'src/models/game';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  constructor() { }

  currentCard: string = '';
  pickCardAnimation = false;
  game: Game = new Game();


  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop() ?? 'The stack is empty!';
      this.pickCardAnimation = true;
      console.log('New card: ' + this.currentCard);
      console.log('Game is', this.game);
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;

      },
        500);
    }
  }
}

