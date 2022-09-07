import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  public roles: any[] = [];
  public orgs: any[] = [];
  public orgId: any[] = [];
  public selectedRoles: any[] = [];
  public email: any;
  public role: any;
  public password: any;
  public confirmPassword: any;

  public mobile: any;
  public firstName: any;
  public id: any;
  roleIds: any;
  public lastName : any;
  hide = true;
  constructor(private router: Router,private httpService: HttpServiceService,
    public snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.getOrgData();
    this.getRoleData();
  }

  getOrgData = () => {
    this.httpService.get('organizations').subscribe(res => {
      this.orgs = res;
    })
  }
  getRoleData = () => {
    this.httpService.get('roles').subscribe(res => {
      this.roles = res;
    })
  }
  public getRoleIds = () => {
    let roleIds = [];
    for(let i =0;i < this.selectedRoles.length;i++) {
      roleIds.push(this.selectedRoles[i]);
    }
    return roleIds;
  }

  viewAccount= () => {
    this.router.navigate(['/account']);
  }

  saveAccount = () => {
    if(this.confirmPassword != this.password){
      this.snackbarService.showErrorMessage("Passwords do not match");
      return;
    }
    let payload:any = {};
    payload['firstName'] = this.firstName;
    payload['lastName'] = this.lastName;
    payload['orgId'] = this.orgId;
    let account:any = {};
    account['email'] = this.email;
    account['password'] =this.password;
    account['mobile'] = this.mobile;
    account['roles'] =this.getRoleIds();
    payload['account'] = account;
    this.httpService.postJson('administrations/signUp', payload).subscribe(res => {
      this.snackbarService.showSuccessMessage("Successfully Saved");
      this.router.navigate(['/account']);
    })
  }
  cancel = () => {
    this.router.navigate(['/account']);
  }
}
