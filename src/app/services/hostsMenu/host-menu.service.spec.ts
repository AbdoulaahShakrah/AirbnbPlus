import { TestBed } from '@angular/core/testing';

import { MenuService } from './host-menu.service';

describe('HostMenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
