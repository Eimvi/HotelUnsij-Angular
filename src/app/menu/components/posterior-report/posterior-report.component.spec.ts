import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteriorReportComponent } from './posterior-report.component';

describe('PosteriorReportComponent', () => {
  let component: PosteriorReportComponent;
  let fixture: ComponentFixture<PosteriorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteriorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteriorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
