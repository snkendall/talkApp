import { Component, OnInit } from '@angular/core';
import { GameStatsService } from '../../services/game-stats.service';
import { Score } from '../../classes/score';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private gameService: GameStatsService) { }

  ngOnInit() {
  }

  displayWinnerStat(): Score {
    if (this.gameService.lastWinner) {
      return this.gameService.lastWinner;
    }
  }

  visible(): boolean {
    return (this.gameService.gameRunning === false) && (this.gameService.lastWinner !== undefined);
  }

}
