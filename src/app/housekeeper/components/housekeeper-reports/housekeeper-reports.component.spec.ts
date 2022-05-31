import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeeperReportsComponent } from './housekeeper-reports.component';

describe('HousekeeperReportsComponent', () => {
  let component: HousekeeperReportsComponent;
  let fixture: ComponentFixture<HousekeeperReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousekeeperReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeeperReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
