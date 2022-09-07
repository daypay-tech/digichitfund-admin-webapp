import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavMenuService } from './services/side-nav-menu.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger(
      'inAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('0.2s ease-out', 
                    style({ height: 90, opacity: 1 }))
          ]
        )
      ]
    ),
    trigger(
      'outAnimation',
      [
        transition(
          ':leave', 
          [
            style({ height: 90, opacity: 1 }),
            animate('0.2s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class SideNavComponent implements OnInit {
  pollQuestion = false;
  poll= false;
  category= false;
  public menus:any[] = [];
  showFiller = false;
  arrow= false;

  constructor(private sideNavMenuService: SideNavMenuService, private router: Router) {
    this.menus = this.sideNavMenuService.getMenus();
  }

  ngOnInit(): void {
  }

  showHideSubMenu = (menu: any) => {
    this.sideNavMenuService.setMenuActive(menu);
    this.sideNavMenuService.showHideSubMenu(menu.code, menu.showSubMenu);
  }

  routeMenu = (menu: any) => {
    this.sideNavMenuService.setMenuActive(menu);
    this.router.navigate([menu.link]);
  }

  routeSubMenu = (menu: any, subMenu: any) => {
    this.sideNavMenuService.setSubMenuActive(menu, subMenu);
    this.router.navigate([subMenu.link]);
  }
}
