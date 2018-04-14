import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { PlayerService } from './AAAplayer.service';
import { Game } from '../classes/game';
import { User } from '../classes/AAAuser';
import { Player } from '../classes/AAAplayer';

@Injectable()
export class CreateGameService {

  currentGame = null;

  constructor(private db: AngularFireDatabase,
              private playerService: PlayerService) {}

  startGame(): Game {
    // Need to insert reference to the blocks once created
    const game: object = { players: [], topScore: 0, blocks: [] };

    // Did I do this right?
    this.currentGame = this.db.list('/games').push(game);
    console.log('There is a new game about to start!', this.currentGame);
    return this.currentGame;
  }

  addPlayer(): void {
    const player: Player = this.playerService.createPlayer();
    this.currentGame.players.push(player);
    console.log(player.displayName + 'joined the game!');
  }

  updateTopScore(score): void {
    this.currentGame.topScore = score;
  }

  findWinner(): Player[] {
    return this.currentGame.players.filter( player => player.score === this.currentGame.topScore);
  }

}
