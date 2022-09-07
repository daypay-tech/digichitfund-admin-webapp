/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SideNavMenuService } from './side-nav-menu.service';

describe('Service: SideNavMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideNavMenuService]
    });
  });

  it('should ...', inject([SideNavMenuService], (service: SideNavMenuService) => {
    expect(service).toBeTruthy();
  }));
});
