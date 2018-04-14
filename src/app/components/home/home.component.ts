import { Component, OnInit } from '@angular/core';
import { GameState, GameStateService } from '../../services/game-stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  GameState = GameState;

  constructor(readonly state: GameStateService) {}

  ngOnInit() {
  }

}
