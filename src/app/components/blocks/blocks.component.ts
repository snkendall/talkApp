import { Component, OnInit } from '@angular/core';
import { GameStatsService } from '../../services/game-stats.service';
import { BLOCKS } from '../../fourBlocks';
import { Block } from '../../classes/block';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  blocks = BLOCKS;

  constructor(private gameService: GameStatsService,
              private user: UserService) { }

  ngOnInit() {
  }

  visible(): boolean {
    return !this.gameService.waiting && this.gameService.gameStarted();
  }

  tapBlock(block: Block): void {
    let currentScore = this.gameService.currentUserScore;
    const topScore = this.gameService.topScore.score;
    if (block.tapCount % 2 === 0) {
      currentScore += 20;
      this.gameService.updateUserScore(currentScore);
      if (currentScore > topScore) {
        this.gameService.updateTopScore(
          {
            score: currentScore,
            displayName: this.user.getName()
          });
      }
    }
    block.tapCount++;
  }

}
