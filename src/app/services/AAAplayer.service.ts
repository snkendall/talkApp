import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Player } from '../classes/AAAplayer';
import { User } from '../classes/AAAuser';

@Injectable()
export class PlayerService {

  constructor(private userInfo: UserService) { }

  createPlayer(): Player {
    const user: User = this.userInfo.getUser();
    return {
      id: user.id,
      displayName: user.displayName,
      score: 0
    };
  }

}

