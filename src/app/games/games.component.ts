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
  item = {};
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
          if(a.rank > b.rank)return-1;
          if(a.rank < b.rank)return 1;
    });
    games = this.games;

  }

  add(){

    this.item.id = Math.random();
    this.item.name = this.addName;
    this.item.rank = 0;
    this.games.push(this.item);
    this.item = {};
    this.addName = "";
  }

  delete(){
    this.games.splice(this.games.indexOf(this.selectedGame), 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
