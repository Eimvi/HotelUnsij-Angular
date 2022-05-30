import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeeperActivitiesComponent } from './housekeeper-activities.component';

describe('HousekeeperActivitiesComponent', () => {
  let component: HousekeeperActivitiesComponent;
  let fixture: ComponentFixture<HousekeeperActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousekeeperActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeeperActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
