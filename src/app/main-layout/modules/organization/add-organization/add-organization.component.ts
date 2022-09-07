import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent implements OnInit {

  constructor(private router:Router, private httpService: HttpServiceService,
    public snackbarService: SnackbarService) { }

  public orgName:any;

  ngOnInit(): void {
  }

  saveOrganization= () => {
    let payload:any = {};
    payload['orgName'] = this.orgName;
    this.httpService.postJson('organizations', payload).subscribe(res => {
      this.snackbarService.showSuccessMessage("Organization saved!");
      this.router.navigate(['/organization']);
    }, (err => {
      this.snackbarService.showErrorMessage(err.error.message);
    }))
  }

  cancel = () => {
    this.router.navigate(['/organization']);
  }
  viewCategory= () => {
    this.router.navigate(['/organization']);
  }

}
