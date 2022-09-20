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

  public calendarList: any[] = [];
  public schemeId: any;
  public schemeName: any;
  public totalAmount: any;
  public totalMembers: any;
  public startTime: any;
  public calendar: any;
  public startDate: any;

  constructor(private router: Router, private httpService: HttpServiceService,
    public snackbarService: SnackbarService) { }
    ngOnInit(): void {
        this.getTemplateData();
    }
    cancel = () => {
      this.router.navigate(['/scheme']);
    }
    viewScheme= () => {
      this.router.navigate(['/scheme']);
    }
    getTemplateData =() => {
      this.httpService.get('schemes/templates').subscribe(res =>{
        console.log(res);
        this.calendarList = res.calendarList;
      })
    }
    saveScheme = () => {
      let payload: any = {};
      if (!this.schemeName){
        this.snackbarService.showErrorMessage("Add Scheme Name");
        return;
      }
      if (!this.totalAmount){
        this.snackbarService.showErrorMessage("Add Total Amount");
        return;
      }
      if (!this.totalMembers){
        this.snackbarService.showErrorMessage("Add Total Members");
        return;
      }     
      payload['schemeName'] = this.schemeName;
      payload['totalAmount'] = this.totalAmount;
      payload['totalMembers'] = this.totalMembers;
      payload['calendar'] = this.calendar;
      payload['startDate'] = this.startDate;
      payload['startTime'] = this.startTime;

      this.httpService.postJson('schemes', payload).subscribe(res => {
        this.snackbarService.showSuccessMessage("Successfully Saved");
        this.router.navigate(['/scheme']);
      })
    }
  }    


//   public statusList: any[] = [];
//   public bedTypeName: any;

//   public status: any;
//   constructor(private router: Router,private httpService: HttpService, public snackbarService: SnackbarService) { }
//   ngOnInit(): void {
//     this.getTemplateData();
//   }

//   getTemplateData = () => {
//     this.httpService.get('bedtypes/templates').subscribe(res => {
//       console.log("templates data");
//       console.log(res);
//       this.statusList = res.statusList;
//     })
//   }

//   savebedTypes = () => {
//     let payload = {};
//     payload['bedTypeName'] = this.bedTypeName;
//     payload['status'] =this.status.code;
//     this.httpService.postJson('bedtypes', payload).subscribe(res => {
//       this.snackbarService.showSuccessMessage("Successfully Saved");
//       this.router.navigate(['/bed']);
//     })
//   }
// }

