import { TestBed } from '@angular/core/testing';

import { AbstractGuardService } from './abstract-guard.service';

describe('AbstractGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractGuardService = TestBed.get(AbstractGuardService);
    expect(service).toBeTruthy();
  });
});
