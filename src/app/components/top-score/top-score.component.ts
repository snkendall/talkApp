import { Component, OnInit } from '@angular/core';
import {GameStatsService} from '../../services/game-stats.service';

@Component({
  selector: 'app-top-score',
  templateUrl: './top-score.component.html',
  styleUrls: ['./top-score.component.scss']
})
export class TopScoreComponent implements OnInit {

  constructor( private gameStats: GameStatsService) { }

  ngOnInit() {
    this.showTopScore();
    this.showCurrentUserScore();
  }

  visible(): boolean {
    return !this.gameStats.waiting && this.gameStats.gameStarted();
  }

  showTopScore(): number {
    if (this.gameStats.topScore) {
      return this.gameStats.topScore.score;
    }
  }

  showCurrentUserScore(): number {
    if (this.gameStats.currentUserScore) {
      return this.gameStats.currentUserScore;
    }
  }

}
