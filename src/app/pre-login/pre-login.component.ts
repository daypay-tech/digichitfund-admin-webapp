import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-login',
  templateUrl: './pre-login.component.html',
  styleUrls: ['./pre-login.component.scss']
})
export class PreLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  superAdmin(){
    this.router.navigate(['/login'], {queryParams: { loginType: 'super_admin' }})
  }
  
  admin(){
    this.router.navigate(['/login'], {queryParams: { loginType: 'admin' }})
  }
  

}
