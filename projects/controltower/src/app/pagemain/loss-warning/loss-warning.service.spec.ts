import { TestBed } from '@angular/core/testing';

import { LossWarningService } from './loss-warning.service';

describe('LossWarningService', () => {
  let service: LossWarningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LossWarningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
