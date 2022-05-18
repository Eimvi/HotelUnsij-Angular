import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambermaidMenuComponent } from './chambermaid-menu.component';

describe('ChambermaidMenuComponent', () => {
  let component: ChambermaidMenuComponent;
  let fixture: ComponentFixture<ChambermaidMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambermaidMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChambermaidMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
