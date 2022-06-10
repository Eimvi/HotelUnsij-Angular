import { TestBed } from '@angular/core/testing';

import { HousekeeperInventoryService } from './housekeeper-inventory.service';

describe('HousekeeperInventoryService', () => {
  let service: HousekeeperInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousekeeperInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
