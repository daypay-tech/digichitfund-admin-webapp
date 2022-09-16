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
        "name":'Scheme',
        "code":"scheme",
        "active":false,
        "link":"/scheme",
        "icon":"add_circle_outline",
        "showSubMenu":false,
        "roles":['ROLE_ADMIN'],
        "subMenus":[
          {
            "name":'Add Scheme',
            "code":"add_scheme",
            "active":false,
            "link":"/scheme/add-scheme",
            "icon":"add_circle_outline"
          },
          {
            "name":'View scheme',
            "code":"view_scheme",
            "active":false,
            "link":"/scheme",
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
        "name":'Auction Schedule',
        "code":"auction",
        "active":false,
        "link":"/auction",
        "subMenus":[],
        "icon":"insert_invitation",
        "roles":['ROLE_ADMIN']
      },
      {
        "name":'Invite',
        "code":"invite",
        "active":false,
        "link":"/invite",
        "subMenus":[],
        "icon":"email",
        "roles":['ROLE_ADMIN']
      },
    ]
  }

  // public getAllMenusBasedOnRoles = () => {
  //    let roles = this.storageService.getRoles();
  //   let menus: any[] = [];
  //   for(let m = 0; m < this.menus.length; m++) {
  //     for(let r = 0; r < roleCodes.length; r++) {
  //       for(let i = 0; i < roles.length; i++) {
  //         if(roleCodes[r] == roles[i]['code']) {
  //           menus.push(this.menus[m]);
  //         }
  //       }
  //     }
  //   }
  //   return menus;
  // }

  public getMenus = () => {
    return this.menus;
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
