import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSendingSuccessfulComponent } from './link-sending-successful.component';

describe('LinkSendingSuccessfulComponent', () => {
  let component: LinkSendingSuccessfulComponent;
  let fixture: ComponentFixture<LinkSendingSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkSendingSuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkSendingSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
