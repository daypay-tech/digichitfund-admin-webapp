import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-edit-poll',
  templateUrl: './edit-poll.component.html',
  styleUrls: ['./edit-poll.component.scss']
})
export class EditPollComponent implements OnInit {

  viewPoll= () => {
    this.router.navigate(['/poll']);
  }

  public categories: any[] = [];
  public pollName: any;
  public categoryId: any;
  id: any;

  constructor(private router: Router,private route: ActivatedRoute,
    private httpService: HttpServiceService, public snackBarService: SnackbarService) {
    this.id = this.route.snapshot.queryParams['id'];
    }
    cancel = () => {
      this.router.navigate(['/poll']);
    }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories = () => {
    this.httpService.get('categories').subscribe(res => {
      this.categories = res;
      this.getPollData();
    })
  }

  getPollData = () => {
    this.httpService.get('polls/'+this.id).subscribe(res => {
      this.setData(res);
    })
  }

  setData(data: any) {
    this.pollName = data.pollName;
    this.categoryId = data.categoryId;
  }

  update = () => {
    let payload: any = {};
    payload['pollName'] = this.pollName;
    payload['categoryId'] =this.categoryId;
    this.httpService.put('polls/'+this.id, payload).subscribe(res => {
      this.snackBarService.showSuccessMessage("Successfully Updated");
      this.router.navigate(['/poll']);
    })
  }
}
