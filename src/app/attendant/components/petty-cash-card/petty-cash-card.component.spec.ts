import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashCardComponent } from './petty-cash-card.component';

describe('PettyCashCardComponent', () => {
  let component: PettyCashCardComponent;
  let fixture: ComponentFixture<PettyCashCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PettyCashCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
