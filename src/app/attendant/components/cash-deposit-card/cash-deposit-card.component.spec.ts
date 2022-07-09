import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashDepositCardComponent } from './cash-deposit-card.component';

describe('CashDepositCardComponent', () => {
  let component: CashDepositCardComponent;
  let fixture: ComponentFixture<CashDepositCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashDepositCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashDepositCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
