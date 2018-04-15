import { Component } from '@angular/core';
import { GameStateService } from '../../services/game-stats.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(readonly state: GameStateService) {}
}
