import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD, REMOVE, UPDATE } from '../crud';
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
  addName = "";


  onSelect(game: Game): void {
    this.selectedGame = game;
  }

  //crud: Observable<number>;

	constructor(private store: Store<number>){
	//this.item = store.select('crud');
	}

  //adiciona item a lista
	add(){
		this.store.dispatch({ type: ADD, itens: this.games, name: this.addName });
    this.addName = "";
	}

  //remove item da lista
	remove(){
		this.store.dispatch({ type: REMOVE, itens: this.games, selected: this.selectedGame });
	}

  //atualiza classificação do item na lista
	update(){
		this.store.dispatch({ type: UPDATE, itens: this.games, selected: this.selectedGame });
	}


  ngOnInit() {

    var source = Observable
    .interval(10000);

    var subscription = source.subscribe(x => {
      //a cada 10 segundos atualiza a classificação de um item aleatoriamente
      var i = Math.floor(Math.random() * this.games.length)
      this.games[i].rank = Math.floor(Math.random() * 10);
      this.games.sort(function compare(a,b){
            if(a.rank > b.rank)return-1;
            if(a.rank < b.rank)return 1;
      });
    });

  }

}
