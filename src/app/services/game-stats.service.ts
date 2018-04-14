import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


export enum GameState {
  Initial = 'intital',
  Waiting = 'waiting',
  Game = 'game',
  Results = 'results'
}

interface Tap {
  index: number;
  name: string;
}

@Injectable()
export class GameStateService {
  scores: Observable<{ name: string; value: any; }[]>;

  points: number[];
  taps: Observable<{}[]>;
  state: Observable<{}>;

  constructor(private userService: UserService, private readonly db: AngularFireDatabase) {
    this.state = db.object('game').valueChanges();
    this.taps = db.list('taps').valueChanges();

    db.list<Tap>('taps').valueChanges().subscribe((taps: Tap[]) => {
      this.points = [0, 0, 0, 0];
      return taps.forEach((tap: Tap) => {
        this.points[tap.index]++;
      });
    });

    this.scores = db.list<Tap>('taps').valueChanges().map((taps: Tap[]) => {
      this.points = [0, 0, 0, 0];

      const results = taps.reduce((scores: { [key: string]: number }, tap: Tap) => {
        scores[tap.name] = scores[tap.name] || 0;

        if (this.points[tap.index] % 2 === 0) {
          scores[tap.name] += 20;
        } else {
          scores[tap.name] -= 5;
        }

        this.points[tap.index]++;
        return scores;
      }, {});

      const resultsArr = Object.keys(results).map(name => ({
        name, value: results[name]
      }));


      return resultsArr;
    });
  }


  addTap(info) {
    this.db.list('taps').push(info);
  }

  reset() {
    this.db.object('game').update({state: GameState.Initial});
  }

  startGame() {
    this.db.object('game').update({state: GameState.Game});
  }

  startWaiting() {
    this.db.object('game').update({state: GameState.Waiting});
  }

  finish() {
    this.db.object('game').update({state: GameState.Results});
  }
}
