import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class SideNavMenuService {

  private menus:any[] = [];

  constructor(private storageService: StorageService) {
    this.menus = [
      {
        "name":'Dasboard',
        "code":"dashboard",
        "active":true,
        "link":"/dashboard",
        "subMenus":[],
        "icon":"dashboard",
        "roles":['ROLE_ADMIN','ROLE_SUPER_ADMIN']
      },
      {
        "name":'Category',
        "code":"category",
        "active":false,
        "link":"/category",
        "icon":"view_list",
        "showSubMenu":false,
        "roles":['ROLE_ADMIN'],
        "subMenus":[
          {
            "name":'Add Category',
            "code":"add_category",
            "active":false,
            "link":"/category/add-category",
            "icon":"dashboard"
          },
          {
            "name":'View Category',
            "code":"view_category",
            "active":false,
            "link":"/category",
            "icon":"view_list"
          }
        ]
      },
      {
        "name":'Poll',
        "code":"poll",
        "active":false,
        "link":"/poll",
        "icon":"add_circle_outline",
        "showSubMenu":false,
        "roles":['ROLE_ADMIN'],
        "subMenus":[
          {
            "name":'Add Poll',
            "code":"add_poll",
            "active":false,
            "link":"/poll/add-poll",
            "icon":"add_circle_outline"
          },
          {
            "name":'View Poll',
            "code":"view_poll",
            "active":false,
            "link":"/poll",
            "icon":"add_circle_outline"
          }
        ]
      },
      {
        "name":'Poll Question',
        "code":"poll_question",
        "active":false,
        "link":"/poll-question",
        "icon":"assessment",
        "showSubMenu":false,
        "roles":['ROLE_ADMIN'],
        "subMenus":[
          {
            "name":'Add Poll Question',
            "code":"add_poll_question",
            "active":false,
            "link":"/poll-question/add-poll-question",
            "icon":"add_circle_outline"
          },
          {
            "name":'View Poll Question',
            "code":"view_poll_question",
            "active":false,
            "link":"/poll-question",
            "icon":"add_circle_outline"
          }
        ]
      },
      {
        "name":'Members',
        "code":"members",
        "active":false,
        "link":"/members",
        "subMenus":[],
        "icon":"group",
        "roles":['ROLE_ADMIN']
      },
      {
        "name":'Organizations',
        "code":"organizations",
        "active":false,
        "link":"/organization",
        "icon":"view_list",
        "roles":['ROLE_SUPER_ADMIN'],
        "showSubMenu":false,
        "subMenus":[
          {
            "name":'Add Organizations',
            "code":"add_organizations",
            "active":false,
            "link":"/organization/add-organization",
            "icon":"dashboard"
          },
          {
            "name":'View Organization',
            "code":"view_organization",
            "active":false,
            "link":"/organization",
            "icon":"view_list"
          }
        ]
      },
      {
        "name":'Account',
        "code":"account",
        "roles":['ROLE_SUPER_ADMIN'],
        "active":false,
        "link":"/account",
        "icon":"view_list",
        "showSubMenu":false,
        "subMenus":[
          {
            "name":'Add Account',
            "code":"add_account",
            "active":false,
            "link":"/account/add-account",
            "icon":"dashboard"
          },
          {
            "name":'View Account',
            "code":"view_account",
            "active":false,
            "link":"/account",
            "icon":"view_list"
          }
        ]
      },
     
      // {
      //   "name":' Poll Preview',
      //   "code":"poll_preview",
      //   "active":false,
      //   "link":"/poll-preview",
      //   "subMenus":[],
      //   "icon":"deck"
      // },
    ]
  }

  public getAllMenusBasedOnRoles = () => {
    let roles = this.storageService.getRoles();
    let menus: any[] = [];
    for(let m = 0; m < this.menus.length; m++) {
      let roleCodes = this.menus[m]['roles'];
      for(let r = 0; r < roleCodes.length; r++) {
        for(let i = 0; i < roles.length; i++) {
          if(roleCodes[r] == roles[i]['code']) {
            menus.push(this.menus[m]);
          }
        }
      }
    }
    return menus;
  }

  public getMenus = () => {
    return this.getAllMenusBasedOnRoles();
  }

  public showHideSubMenu = (menuCode: any, showSubMenu: boolean) => {
    for(let idx = 0;idx < this.menus.length;idx++) {
      if(this.menus[idx].code == menuCode) {
        this.menus[idx]['showSubMenu'] = !showSubMenu;
        break;
      }
    }
  }
  
  private setAllMenuDeActive = () => {
    for(let idx = 0;idx < this.menus.length;idx++) {
      this.menus[idx]['active'] = false;
      for(let idx1 = 0;idx1 < this.menus[idx].subMenus.length;idx1++) {
        this.menus[idx].subMenus[idx1]['active'] = false;
      }
    }
  }

  public setMenuActive = (menu: any) => {
    for(let idx = 0;idx < this.menus.length;idx++) {
      if(this.menus[idx].code == menu.code) {
        this.menus[idx]['active'] = true;
      } else {
        this.menus[idx]['active'] = false;
      }
    }
  }

  public setSubMenuActive = (menu: any, subMenu: any) => {
    let subMenus = menu.subMenus;
    for(let idx = 0;idx < subMenus.length;idx++) {
      if(subMenus[idx].code == subMenu.code) {
        subMenus[idx]['active'] = true;
      } else {
        subMenus[idx]['active'] = false;
      }
    }
  }
}
