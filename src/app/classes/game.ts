import { Block } from './block';
import {Score} from './score';

export class Game {
  id: string;
  waiting: boolean;
  topScore: Score;
  winner: Score;
  blocks: Block[];
}
