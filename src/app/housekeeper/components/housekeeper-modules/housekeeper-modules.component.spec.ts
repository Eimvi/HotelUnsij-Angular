import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeeperModulesComponent } from './housekeeper-modules.component';

describe('HousekeeperModulesComponent', () => {
  let component: HousekeeperModulesComponent;
  let fixture: ComponentFixture<HousekeeperModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousekeeperModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeeperModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
