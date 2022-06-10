import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeeperInventoryComponent } from './housekeeper-inventory.component';

describe('HousekeeperInventoryComponent', () => {
  let component: HousekeeperInventoryComponent;
  let fixture: ComponentFixture<HousekeeperInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousekeeperInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeeperInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
