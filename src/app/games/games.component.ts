import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
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

  //atualiza classificação do item selecionado
  update(){
    for(var i=0;i<this.games.length;i++) {
      if (this.games[i].id == this.selectedGame.id){
        this.games[i].rank = this.selectedGame.rank;
      }

    }
  }

  //inseri um novo item
  add(){
    this.item.id = Math.random();
    this.item.name = this.addName;
    this.item.rank = 0;
    this.games.push(this.item);
    this.item = {}; //limpando variavel
    this.addName = "";
  }

  //remove o item selecionado
  delete(){
    this.games.splice(this.games.indexOf(this.selectedGame), 1);
  }

  constructor() { }

  ngOnInit() {

    var source = Observable
    .interval(1000);

    var subscription = source.subscribe(x =>

      var i = Math.floor(Math.random() * this.games.length)
      this.games[i].rank = Math.floor(Math.random() * 10);
      this.games.sort(function compare(a,b){
            if(a.rank > b.rank)return-1;
            if(a.rank < b.rank)return 1;
      });
    );

  }

}
