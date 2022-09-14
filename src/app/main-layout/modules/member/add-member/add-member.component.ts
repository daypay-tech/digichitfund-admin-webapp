import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
 
  public firstName: any;
  public lastName: any;
  public mobile: any;
  public email: any;
    
  constructor(private router: Router, private httpService: HttpServiceService,
    public snackbarService: SnackbarService) { }
    ngOnInit(): void {

    }
    cancel = () => {
      this.router.navigate(['/members']);
    }
    viewMember= () => {
      this.router.navigate(['/members']);
    }
    saveMember = () => {
        this.router.navigate(['/members']); 
    }
  }