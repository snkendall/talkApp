import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../../services/game-stats.service';
import {UserService} from '../../services/user.service';
import { BLOCKS } from '../../fourBlocks';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  blocks = BLOCKS;


  constructor(private gameService: GameStateService,
              private user: UserService) { }

  ngOnInit() {
  }

  tapBlock(block): void {
    this.gameService.addTap({
      name: this.user.name,
      index: block
    });
  }

}
