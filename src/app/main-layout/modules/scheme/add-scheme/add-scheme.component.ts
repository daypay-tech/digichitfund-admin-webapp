import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

interface scheme {
  value: string;
  id: string;
}

@Component({
  selector: 'app-add-scheme',
  templateUrl: './add-scheme.component.html',
  styleUrls: ['./add-scheme.component.css']
})
export class AddSchemeComponent implements OnInit {
  schemes: scheme[] = [
    {id:'tamil',value: 'Tamil'},
    {id:'english',value: 'English'},
  ];
  
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
    saveScheme = () => {
      
        this.router.navigate(['/scheme']);
      
    }
  }