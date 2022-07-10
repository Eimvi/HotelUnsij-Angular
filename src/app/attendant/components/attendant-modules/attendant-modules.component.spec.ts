import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendantModulesComponent } from './attendant-modules.component';

describe('AttendantModulesComponent', () => {
  let component: AttendantModulesComponent;
  let fixture: ComponentFixture<AttendantModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendantModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendantModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
