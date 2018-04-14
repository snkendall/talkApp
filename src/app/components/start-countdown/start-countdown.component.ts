import { Component, OnInit } from '@angular/core';
import { GameStatsService } from '../../services/game-stats.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-start-countdown',
  templateUrl: './start-countdown.component.html',
  styleUrls: ['./start-countdown.component.scss']
})
export class StartCountdownComponent implements OnInit {

  constructor(private gameService: GameStatsService,
              private userService: UserService) { }

  ngOnInit() {
  }

  showWaiting(): boolean {
    if (this.gameService.waiting) {
      return true;
    }
  }

  showSignInPrompt(): boolean {
    return this.userService.authenticated();
  }

}
