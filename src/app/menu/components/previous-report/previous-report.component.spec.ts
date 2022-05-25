import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousReportComponent } from './previous-report.component';

describe('PreviousReportComponent', () => {
  let component: PreviousReportComponent;
  let fixture: ComponentFixture<PreviousReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
