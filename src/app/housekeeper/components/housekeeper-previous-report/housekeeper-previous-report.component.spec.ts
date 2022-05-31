import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeeperPreviousReportComponent } from './housekeeper-previous-report.component';

describe('HousekeeperPreviousReportComponent', () => {
  let component: HousekeeperPreviousReportComponent;
  let fixture: ComponentFixture<HousekeeperPreviousReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousekeeperPreviousReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeeperPreviousReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
