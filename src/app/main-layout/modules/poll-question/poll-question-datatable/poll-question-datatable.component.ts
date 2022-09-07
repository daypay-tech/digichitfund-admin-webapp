import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { AddPollQuestionOptionDialogComponent } from '../add-poll-question-option-dialog/add-poll-question-option-dialog.component';
import { ViewPollQuestionDialogComponent } from '../view-poll-question-dialog/view-poll-question-dialog.component';

@Component({
  selector: 'app-poll-question-datatable',
  templateUrl: './poll-question-datatable.component.html',
  styleUrls: ['./poll-question-datatable.component.scss']
})
export class PollQuestionDatatableComponent implements OnInit {

  public paginator: MatPaginator | undefined;
  public PAGE_DFAULT_SIZE = 5;
  public page: any = 0;
  public pageSize = this.PAGE_DFAULT_SIZE;
  public currentPage = 0;
  public totalSize: number= 0;
  public isRefreshing = false;
  public pollId: any;
  public polls: any[] = [];
  public categoryName: any[] = [];
  public categories: any[] = [];
  public categoryId: any;
nearby:any;
displayedColumns: string[] = ['id', 'categoryName','pollName', 'question','view','edit','delete'];
public dataSource = new MatTableDataSource<any>();

constructor(private router:Router,private cdr:ChangeDetectorRef, 
  private httpService: HttpServiceService, 
  public dialog: MatDialog) { }

addPollQuestions = () => {
  this.router.navigate(['/poll-question/add-poll-question']);
}


ngOnInit(): void {
  this.getCategories();
}

getCategories = () => {
  this.httpService.get('categories').subscribe(res => {
    this.categories = res;
    this.getPollQuestions();
  })
}

getPollsByCategory = () => {
  let url = 'polls/flatPolls';
  if(this.categoryId && this.categoryId != '') {
    url = url +'?categoryId='+this.categoryId;
  }
  this.httpService.get(url).subscribe(res => {
    this.polls = res;
  })
}

getPollQuestions = () => {
  let page = this.currentPage + 1;
  let url = 'polls/questions/aggregation?page='+page+'&pageSize='+this.pageSize;
  if(this.pollId) {
    url = url +'&pollId='+this.pollId;
  }
  if(this.categoryId) {
    url = url +'&categoryId='+this.categoryId;
  }
  this.httpService.get(url).subscribe(res => {
    this.refreshDataTable(res);
  })
}

public getPollQuestionsPaginatorData(event: PageEvent) {
  this.currentPage = event.pageIndex;
  this.pageSize = event.pageSize;
  this.getPollQuestions();
}

private refreshDataTable = (res: any) => {
  this.dataSource.data = res.data;
  console.log(res.data);
  this.totalSize = res.totalRecord;
  this.currentPage = (res.currentPage - 1);
  this.dataSource._updateChangeSubscription();
  if (!(this.cdr as ViewRef).destroyed) {
    this.cdr.detectChanges();
  }
}

  edit = (id: any) => {
    console.log(id);
    this.router.navigate(['/poll-question/edit-poll-question'], {queryParams:{pollId: id}});
  }

  doDelete = (row: any) => {
    
  }

  viewQuestionOptions = (id: any) => {
    const dialogRef = this.dialog.open(ViewPollQuestionDialogComponent, {
      height: '80%',
      width: '80%',
      data: {
        id: id,
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addQuestionOptions = (row: any) => {
    let data = row;
    const dialogRef = this.dialog.open(AddPollQuestionOptionDialogComponent, {
      height: '500px',
      width: '800px',
      data: data,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
