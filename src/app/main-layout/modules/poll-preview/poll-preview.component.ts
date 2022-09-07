import { Component, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/dashboard/dashboard-service/dashboard.service';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-poll-preview',
  templateUrl: './poll-preview.component.html',
  styleUrls: ['./poll-preview.component.scss']
})
export class PollPreviewComponent implements OnInit {

  public categories: any[] = [];
  public categoryId: any;
  public pollId: any;
  public questionId:any;
  data: any;
  public pollName: any;
  public polls: any[] = [];
  public options: any[] = [];
  public fromDate : any;
  public toDate :any;
  public questions: any[] = [];
  public question: any;
  public submitButton:any;
  public paginator: MatPaginator | undefined;
  public PAGE_DFAULT_SIZE = 5;
  public page: any = 0;
  public pageSize = this.PAGE_DFAULT_SIZE;
  public currentPage = 0;
  public totalSize: number= 0;
  public isRefreshing = false;
  isShown: any ; // hidden by default

  constructor(private router: Router,private httpService: HttpServiceService,
    public snackbarService: SnackbarService, private dashboardService: DashboardService) { }

  
  ngOnInit(): void {
    this.getCategories();
  }
  
  getCategories = () => {
    this.httpService.get('categories').subscribe(res => {
      this.categories = res;
    })
  }
  
  public fetchPollByCategory() {
    this.getPolls();
  }
 
  submit = () => {
    this.getPollQuestions();
    let data: any = {};
    data.categoryId = this.categoryId;
    data.pollId = this.pollId;
    data.fromDate = this.fromDate;
    data.toDate = this.toDate;
    this.dashboardService.refreshAllChart(data);
    this.isShown = "true";

  }
 
  getPolls = () => {
    let url = "polls/flatPolls";
    if(this.categoryId) {
      url = url + "?categoryId="+this.categoryId;
    }
    this.httpService.get(url).subscribe(res => {
      this.polls = res;
    })
  }
 
  getPollQuestions = () => {
    let page = this.currentPage + 1;
    let url = 'questions?page='+page+'&pageSize='+this.pageSize;
    if(this.pollId) {
      url = url +'&pollId='+this.pollId;
    }
    this.httpService.get(url).subscribe(res => {
      this.questions = res.data;
      this.totalSize = res.totalRecord;
      this.currentPage = (res.currentPage - 1);
    })
  }

  public getPollQuestionsPaginatorData(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getPollQuestions();
  }
}
