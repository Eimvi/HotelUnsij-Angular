import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeeperInventoryCardComponent } from './housekeeper-inventory-card.component';

describe('HousekeeperInventoryCardComponent', () => {
  let component: HousekeeperInventoryCardComponent;
  let fixture: ComponentFixture<HousekeeperInventoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousekeeperInventoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeeperInventoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
