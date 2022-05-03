import { TestBed } from '@angular/core/testing';

import { MenuChildGuard } from './menu-child.guard';

describe('MenuChildGuard', () => {
  let guard: MenuChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MenuChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
