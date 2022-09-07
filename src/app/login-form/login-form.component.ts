import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';
import { StorageService } from '../core/services/storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup | any;

  public username : any;
  public password : any;
  public loginValid = false;
  public orgs: any[] = [];
  public orgId: any[] = [];
  public loginType: any = 'admin';

  constructor(private router:Router, private _formBuilder: FormBuilder, private httpService: HttpServiceService,
    public snackbarService: SnackbarService, 
    private route: ActivatedRoute, private storageService: StorageService) {
      this.loginType = this.route.snapshot.queryParamMap.get('loginType');
      if(!this.loginType) {
        this.loginType = 'admin';
      }
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
          '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
        ),]),
        password: new FormControl('', [Validators.required,Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
        )])
      });
  }

  ngOnInit(): void {
    if(this.loginType == 'admin') {
      this.getOrgData();
    }
  }

  getOrgData = () => {
    this.httpService.get('organizations').subscribe(res => {
      this.orgs = res;
    })
  }
  onSubmit(){
    let payload:any = {};
    payload['userName'] = this.username;
    payload['password'] =this.password;
    if(this.loginType == 'admin') {
      payload['orgId'] = this.orgId;
    }
    this.httpService.postJson('administrations/login', payload).subscribe(res => {
      this.snackbarService.showSuccessMessage("Successfully Authenticated");
      this.storageService.saveUserData(res);
      this.router.navigate(['/dashboard']);
    }, (err => {
      console.log(err);
      //this.snackbarService.showErrorMessage(err.error.message);
    }))
  }
}
