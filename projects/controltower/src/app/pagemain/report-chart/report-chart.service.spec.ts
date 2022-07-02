import { TestBed } from '@angular/core/testing';

import { ReportChartService } from './report-chart.service';

describe('ReportChartService', () => {
  let service: ReportChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
