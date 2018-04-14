import { TestBed, inject } from '@angular/core/testing';

import { CreateGameService } from './AAAcreate-game.service';

describe('CreateGameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateGameService]
    });
  });

  it('should be created', inject([CreateGameService], (service: CreateGameService) => {
    expect(service).toBeTruthy();
  }));
});
