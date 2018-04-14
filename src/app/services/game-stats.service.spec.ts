import { TestBed, inject } from '@angular/core/testing';

import { GameStateService } from './game-stats.service';

describe('GameStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameStateService]
    });
  });

  it('should be created', inject([GameStateService], (service: GameStateService) => {
    expect(service).toBeTruthy();
  }));
});
