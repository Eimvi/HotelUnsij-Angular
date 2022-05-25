import { TestBed } from '@angular/core/testing';

import { ChambermaidReportsService } from './chambermaid-reports.service';

describe('ChambermaidReportsService', () => {
  let service: ChambermaidReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChambermaidReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
