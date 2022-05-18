import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambermaidActivitiesComponent } from './chambermaid-activities.component';

describe('ChambermaidActivitiesComponent', () => {
  let component: ChambermaidActivitiesComponent;
  let fixture: ComponentFixture<ChambermaidActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambermaidActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChambermaidActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
