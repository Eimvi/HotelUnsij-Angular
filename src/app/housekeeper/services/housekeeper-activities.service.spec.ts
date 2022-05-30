import { TestBed } from '@angular/core/testing';

import { HousekeeperActivitiesService } from './housekeeper-activities.service';

describe('HousekeeperActivitiesService', () => {
  let service: HousekeeperActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousekeeperActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
