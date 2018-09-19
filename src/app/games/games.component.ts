import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GAMES } from '../mock-games';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games = GAMES;


  selectedGame: Game;
  onSelect(game: Game): void {
    this.selectedGame = game;
  }

  sort(){
    for(var i=0;i<this.games.length;i++) {
      if (this.games[i].id == this.selectedGame.id){
        this.games[i].rank = this.selectedGame.rank;
      }

    }
    this.games.sort(function compare(a,b){
          if(a.rank < b.rank)return-1;
          if(a.rank > b.rank)return 1;
    });
    games = this.games;

  }

  constructor() { }

  ngOnInit() {
  }

}
