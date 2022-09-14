import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {

  
  public firstName: any;
  public lastName: any;
  public mobile: any;
  public email: any;
    
  constructor(private router: Router, private httpService: HttpServiceService,
    public snackbarService: SnackbarService) { }
    ngOnInit(): void {

    }
    cancel = () => {
      this.router.navigate(['/scheme']);
    }
    viewMember= () => {
      this.router.navigate(['/scheme']);
    }
    saveMember = () => {
        this.router.navigate(['/scheme']); 
    }
  }