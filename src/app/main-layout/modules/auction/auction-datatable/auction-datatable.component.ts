import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewRef } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';


export interface PeriodicElement {
  date: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '9/12/2022', time: '10:00 AM'},
  {date: '10/12/2022', time: '10:00 AM'},
  {date: '11/12/2022', time: '10:00 AM'},
];

@Component({
  selector: 'app-auction-datatable',
  templateUrl: './auction-datatable.component.html',
  styleUrls: ['./auction-datatable.component.css']
})
export class AuctionDatatableComponent implements OnInit {

  displayedColumns: string[] = ['id','date','time','status','action'];
  public schemes: any[] = [];
  public schemeId: any;
  public paginator: MatPaginator | undefined;
  public PAGE_DFAULT_SIZE = 2;
  public page: any = 0;
  public pageSize = this.PAGE_DFAULT_SIZE;
  public currentPage = 0;
  public totalSize: number= 0;
  public isRefreshing = false;
 
//  public dataSource = new MatTableDataSource<any>();
 dataSource = ELEMENT_DATA;
 schemeName: any;

constructor(private router:Router,
  private cdr:ChangeDetectorRef, 
  private httpService: HttpServiceService,
  public snackbarService: SnackbarService) { 

}


addNew = () => {
  this.router.navigate(['/poll/add-poll']);
}


ngOnInit(): void {
  // this.getCategories();
}

getCategories = () => {
  this.httpService.get('categories/flat').subscribe(res => {
    this.schemes = res;
    this.getAuctionData();
  })
}

getScheme = () => {
  let url = 'polls/flatPolls';
  if(this.schemeId && this.schemeId != '') {
    url = url +'?schemeId='+this.schemeId;
  }
  this.httpService.get(url).subscribe(res => {
  })
}

public fetchAuctionByScheme() {
  this.currentPage = 0;
  this.pageSize = this.PAGE_DFAULT_SIZE;
  this.getAuctionData();
}

getAuctionData = () => {
  let page = this.currentPage + 1;
  let url = 'polls?page='+page+'&pageSize='+this.pageSize;
  if(this.schemeId && this.schemeId != '') {
    url = url +'&schemeId='+this.schemeId;
  }
  this.httpService.get(url).subscribe(res => {
    // this.refreshDataTable(res);
  })
}

public getPaginatorData(event: PageEvent) {
  this.currentPage = event.pageIndex;
  this.pageSize = event.pageSize;
  this.getAuctionData();
}

// private refreshDataTable = (res: any) => {
//   this.dataSource.data = res.data;
//   console.log(res.data);
//   this.totalSize = res.totalRecord;
//   this.currentPage = (res.currentPage - 1);
//   this.dataSource._updateChangeSubscription();
//   if (!(this.cdr as ViewRef).destroyed) {
//     this.cdr.detectChanges();
//   }
// }

  edit = (id: any) => {
    this.router.navigate(['/auction'], {queryParams:{id: id}});
    console.log(id)
  }
 
  delete (id: any) {
    let payload = {};
    this.httpService.delete('auction/'+id, payload).subscribe(res => {
      this.snackbarService.showSuccessMessage("Successfully Deleted..");
      this.router.navigate(['/auction']);
      this.getAuctionData();
    })
  }
}
