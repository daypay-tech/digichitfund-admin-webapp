import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-edit-organization',
  templateUrl: './edit-organization.component.html',
  styleUrls: ['./edit-organization.component.scss']
})
export class EditOrganizationComponent implements OnInit {

  public orgName: any;
  id: any;

  constructor(private router: Router, private snackBarService: SnackbarService,
     private httpService: HttpServiceService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.queryParams['id'];
   }

  ngOnInit(): void {
    this.getData();
  }


  cancel = () => {
    this.router.navigate(['/organization']);

  }

  viewOrganizations = () => {
    this.router.navigate(['/organization']);

  }

  getData = () => {
    this.httpService.get('organizations/'+this.id).subscribe(res => {
      this.setData(res);
    })
  }

  setData(data: any) {
    this.orgName = data.orgName;
  }

  updateOrganization = () => {
    let payload: any = {};
    payload['id'] =this.id;
    payload['orgName'] = this.orgName;
    this.httpService.put('organizations/'+this.id, payload).subscribe(res => {
      this.snackBarService.showSuccessMessage("Successfully Updated");
      this.router.navigate(['/organization']);
    })
  }

}
