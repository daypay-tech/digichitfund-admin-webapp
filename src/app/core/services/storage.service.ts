import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

 
  public saveUserData(user: any):void {
    window.localStorage.setItem("user", JSON.stringify(user));
  }

  public getUserData(): any {
    let user:any = window.localStorage.getItem("user");
    if(user) {
      return JSON.parse(user);
    }
  }

  // public getRoles = () => {
  //   let user = this.getUserData();
  //   if(user) {
  //     return user['roles'];
  //   }
  // }

  public clear() {
      window.localStorage.removeItem("user");
  }

  public getAccessToken() {
      let user = this.getUserData();
      if(user) {
        return user['jwtResponse']['accessToken'];
      }
  }
}