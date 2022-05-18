import { TestBed } from '@angular/core/testing';

import { ChambermaidActivitiesService } from './chambermaid-activities.service';

describe('ChambermaidActivitiesService', () => {
  let service: ChambermaidActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChambermaidActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
