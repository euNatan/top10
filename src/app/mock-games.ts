import { Game } from './game';

export const GAMES: Game[] = [
  { id: 1, name: 'Naruto', rank: 1 },
  { id: 2, name: 'League of Legends', rank: 2 },
  { id: 3, name: 'Counter Strike', rank: 3 },
  { id: 4, name: 'Fifa 18', rank: 4 },
  { id: 5, name: 'The King of Fighter', rank: 5 },
  { id: 6, name: 'Mega Man X', rank: 6 },
  { id: 7, name: 'Sonic', rank: 7 },
  { id: 8, name: 'Super Mario', rank: 8 },
  { id: 9, name: 'Pac-Man', rank: 9 },
  { id: 10, name: 'Battle Field 4', rank: 10 }
].sort(function compare(a,b){
                    if(a.rank > b.rank)return-1;
                    if(a.rank < b.rank)return 1;
        });
