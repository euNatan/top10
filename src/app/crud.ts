import { Action } from '@ngrx/store';

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const UPDATE = 'UPDATE';

export function crud(state: number = 0, action: Action) {
	switch (action.type) {
		case ADD:
      var item = {};
      item.id = Math.random();
      item.name = action.name;
      item.rank = 0;
      action.itens.push(item);
      return;

		case REMOVE:
      action.itens.splice(action.itens.indexOf(action.selected), 1);
      return;

		case UPDATE:
      for(var i=0;i<action.itens.length;i++) {
        if (action.itens[i].id == action.selected.id){
          action.itens[i].rank = action.selected.rank;
        }
      }
      action.itens.sort(function compare(a,b){
            if(a.rank > b.rank)return-1;
            if(a.rank < b.rank)return 1;
      });
			return;

		default:
			return state;
	}
}
