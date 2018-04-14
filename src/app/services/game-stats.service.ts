import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Score } from '../classes/score';
import { Game } from '../classes/game';
import {BLOCKS} from '../fourBlocks';
import * as firebase from 'firebase/app';



@Injectable()
export class GameStatsService {

  gameRef: any;

  gameRunningRef: any;

  waitingRef: any;

  waiting: boolean;

  topScoreRef: any;

  topScore: Score;

  lastWinner: Score;


  constructor(private userService: UserService) {
    this.gameRunningRef = firebase.database().ref('gameCurrentlyRunning').set(false);
  }

  createNewGame(): any {
    // grab the current datetime to use as the id
    // create a blank game template
    const key = firebase.database().ref().child('games').push().key;
    const newGame: Game = {
      id: key,
      waiting: true,
      topScore: {score: 0, displayName: ''},
      winner: {score: 0, displayName: ''},
      blocks: BLOCKS };

    // set up the reference to the current game
    // subscribe to changes in the game
    this.gameRef = firebase.database().ref(`games/${key}`).set(newGame);
    // this.subscription = this.gameRef.valueChanges()
    //  .subscribe(game => this.currentGame = game);
  }

  subscribe(rootRef): void {
    // set up refs
    this.waitingRef = rootRef.child('waiting');
    this.topScoreRef = rootRef.child('topScore');

    // listen to changes
    this.waitingRef.on('value', snapshot => {
      this.waiting = snapshot.val();
    });
    this.topScoreRef.on('value', snapshot => {
      this.topScore = snapshot.val();
    });
  }

  wait(): any {
    setTimeout(() => {
      const flip = { waiting : false };
      return this.gameRef.update(flip);
    }, 30000);
  }

  flipTheFlag(): void {
    const currently = this.gameRunningRef.val();
    this.gameRunningRef.set(!currently);
  }

  endGame(): void {
    setTimeout(() => {
      this.flipTheFlag();
      this.lastWinner = this.gameRef.child('topScore').val();
     // this.subscription.unsubscribe();
    }, 600000000);
  }

  startGame(): void {
    this.flipTheFlag();
    this.createNewGame();
    this.subscribe(this.gameRef);
    // wait 30 seconds for the game to start
    this.wait();
    // This part is either unnecessary, or needs to be expanded throughout the rest of the code
    this.endGame();
  }


  gameStarted(): boolean {
    return this.gameRunningRef.val();
  }

  updateTopScore(score: Score): void {
    this.gameRef.update({score: score});
  }

  updateUserScore(score: number): void {
    this.userService.currentUser.score = score;
  }

}
