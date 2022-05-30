import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeeperMenuComponent } from './housekeeper-menu.component';

describe('HousekeeperMenuComponent', () => {
  let component: HousekeeperMenuComponent;
  let fixture: ComponentFixture<HousekeeperMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousekeeperMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeeperMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
