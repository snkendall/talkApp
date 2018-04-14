import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../../services/game-stats.service';
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


  constructor(private gameService: GameStateService,
              private user: UserService) { }

  ngOnInit() {
  }

  visible(): boolean {
    return true;
    // return !this.gameService.waiting && this.gameService.gameStarted();
  }

  tapBlock(block: Block): void {
    this.gameService.addTap({
      name: this.user.name,
      index: block
    });
  }

}
