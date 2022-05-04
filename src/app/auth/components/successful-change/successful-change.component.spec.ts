import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulChangeComponent } from './successful-change.component';

describe('SuccessfulChangeComponent', () => {
  let component: SuccessfulChangeComponent;
  let fixture: ComponentFixture<SuccessfulChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
