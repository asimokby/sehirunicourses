import { TestBed } from '@angular/core/testing';

import { PractiseService } from './practise.service';

describe('PractiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PractiseService = TestBed.get(PractiseService);
    expect(service).toBeTruthy();
  });
});
