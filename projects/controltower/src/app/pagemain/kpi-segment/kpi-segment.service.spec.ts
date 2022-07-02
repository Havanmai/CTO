import { TestBed } from '@angular/core/testing';

import { KpiSegmentService } from './kpi-segment.service';

describe('KpiSegmentService', () => {
  let service: KpiSegmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KpiSegmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
