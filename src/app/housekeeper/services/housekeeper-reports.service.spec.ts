import { TestBed } from '@angular/core/testing';

import { HousekeeperReportsService } from './housekeeper-reports.service';

describe('HousekeeperReportsService', () => {
  let service: HousekeeperReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousekeeperReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
