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
     
  }

  ngOnInit(): void { }

  onSubmit(){
    {
      this.router.navigate(['/scheme']);
    }
  }
}
