import { TestBed, inject } from '@angular/core/testing';

import { TopScoreService } from './AAAtop-score.service';

describe('TopScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopScoreService]
    });
  });

  it('should be created', inject([TopScoreService], (service: TopScoreService) => {
    expect(service).toBeTruthy();
  }));
});
