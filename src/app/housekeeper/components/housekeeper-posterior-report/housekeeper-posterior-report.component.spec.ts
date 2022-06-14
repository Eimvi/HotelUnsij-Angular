import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeeperPosteriorReportComponent } from './housekeeper-posterior-report.component';

describe('HousekeeperPosteriorReportComponent', () => {
  let component: HousekeeperPosteriorReportComponent;
  let fixture: ComponentFixture<HousekeeperPosteriorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousekeeperPosteriorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeeperPosteriorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
