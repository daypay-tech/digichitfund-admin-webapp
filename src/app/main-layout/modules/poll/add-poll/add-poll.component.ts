import { HttpServiceService } from './../../../../shared/services/http/http-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.scss']
})
export class AddPollComponent implements OnInit {

  public categories: any[] = [];
  public pollName: any;
  public categoryId: any;
  constructor(private router: Router,private httpService: HttpServiceService,
    public snackbarService: SnackbarService) { }
  ngOnInit(): void {
    this.getTemplateData();
  }

  getTemplateData = () => {
    this.httpService.get('categories').subscribe(res => {
      console.log("templates data");
      console.log(res);
      this.categories = res;
    })
  }

  getCategoryId(data: any) {
    console.log(data);
  }
  viewPoll= () => {
    this.router.navigate(['/poll']);
  }
  savePoll = () => {
    let payload:any = {};
    payload['pollName'] = this.pollName;
    payload['categoryId'] =this.categoryId;
    this.httpService.postJson('polls', payload).subscribe(res => {
      this.snackbarService.showSuccessMessage("Successfully Saved");
      this.router.navigate(['/poll']);
    })
  }
  cancel = () => {
    this.router.navigate(['/poll']);
  }
}
