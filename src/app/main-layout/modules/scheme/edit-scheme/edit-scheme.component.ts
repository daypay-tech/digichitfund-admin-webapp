import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-edit-scheme',
  templateUrl: './edit-scheme.component.html',
  styleUrls: ['./edit-scheme.component.css']
})
export class EditSchemeComponent implements OnInit {

  public schemes: any[] = [];
  public pollName: any;
  public schemeId: any;
  public schemeName: any;
  public totalAmount: any;
  public totalMembers: any;
  public startTime: any;
  
  constructor(private router: Router, private httpService: HttpServiceService,
    public snackbarService: SnackbarService) { }
    ngOnInit(): void {

    }
    cancel = () => {
      this.router.navigate(['/scheme']);
    }
    viewScheme= () => {
      this.router.navigate(['/scheme']);
    }
    editScheme = () => {
      
        this.router.navigate(['/scheme']);
      
    }
  }