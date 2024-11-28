import { Component } from '@angular/core';
import { Game } from 'src/models/game';
import{DialogAddPlayerComponent} from '../dialog-add-player/dialog-add-player.component';
import {MatDialog} from '@angular/material/dialog';




@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  constructor(public dialog: MatDialog) { }

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name:string) => {
      this.game.players.push(name);
    });
    }
     
}

