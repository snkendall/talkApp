import { Component, OnInit } from '@angular/core';
import { CreateGameService } from '../../services/AAAcreate-game.service';
import { UserService } from '../../services/user.service';
import { GameStatsService } from '../../services/game-stats.service';


@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styleUrls: ['./game-button.component.scss']
})
export class GameButtonComponent implements OnInit {

  constructor(private userService: UserService,
              private gameStatsService: GameStatsService) { }

  ngOnInit() {
  }

  isGame(): boolean {
    return this.gameStatsService.gameStarted();
  }

  currentUser(): boolean {
    return this.userService.currentUser !== null;
  }

  startGame(): void {
    this.gameStatsService.startGame();
  }

}
