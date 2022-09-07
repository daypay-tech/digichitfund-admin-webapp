import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  public roles: any[] = [];
  public orgs: any[] = [];
  public orgId: any[] = [];
  public selectedRoles: any[] = [];
  public email: any;
  public role: any;
  public password: any;
  public mobile: any;
  public firstName: any;
  public id: any;
  roleIds: any;
  public lastName : any;
  hide = true;

  constructor(private router: Router,private route: ActivatedRoute,
    private httpService: HttpServiceService, public snackBarService: SnackbarService) {
    this.id = this.route.snapshot.queryParams['id'];
    }
    cancel = () => {
      this.router.navigate(['/account']);
    }

  ngOnInit(): void {
    this.getRoles();
  }
  viewAccount= () => {
    this.router.navigate(['/account']);
  }

  
  getRoles = () => {
    this.httpService.get('categories').subscribe(res => {
      this.roles = res;
      this.getAccountData();
    })
  }

  getAccountData = () => {
    this.httpService.get('polls/'+this.id).subscribe(res => {
      this.setData(res);
    })
  }

  setData(data: any) {
    this.firstName =data.firstName;
    this.lastName = data.lastName
    this.email = data.email;
    this.password = data.password;
    this.mobile = data.mobile;
  }

  updateAccount = () => {
    let payload: any = {};
    payload['firstName'] = this.firstName;
    payload['lastName'] = this.lastName;
    payload['password'] =this.password;
    payload['email'] = this.email;
    payload['password'] =this.password;
    payload['mobile'] = this.mobile;
    payload['roles'] =this.roles;
    this.httpService.put('polls/'+this.id, payload).subscribe(res => {
      this.snackBarService.showSuccessMessage("Successfully Updated");
      this.router.navigate(['/poll']);
    })
  }
}
