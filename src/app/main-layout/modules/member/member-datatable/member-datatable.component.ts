import { ChangeDetectorRef, Component, OnInit, ViewRef } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
@Component({
  selector: 'app-member-datatable',
  templateUrl: './member-datatable.component.html',
  styleUrls: ['./member-datatable.component.scss']
})
export class MemberDatatableComponent implements OnInit {

  public paginator: MatPaginator | undefined;
  public PAGE_DFAULT_SIZE = 2;
  public page: any = 0;
  public pageSize = this.PAGE_DFAULT_SIZE;
  public currentPage = 0;
  public totalSize: number= 0;
  public isRefreshing = false;

displayedColumns: string[] = ['id','firstName','lastName','email','mobile','edit','delete'];
 public dataSource = new MatTableDataSource<any>();

constructor(private router:Router,
  private cdr:ChangeDetectorRef, 
  private httpService: HttpServiceService,
  public snackbarService: SnackbarService) { 

}
viewPoll= () => {
  this.router.navigate(['/poll/add-poll']);
}

ngOnInit(): void {
  this.getMembers();
}

getMembers = () => {
  let page = this.currentPage + 1;
  let url = 'members?page='+page+'&pageSize='+this.pageSize;
  this.httpService.get(url).subscribe(res => {
    this.refreshDataTable(res);
  })
}

  public getMembersPaginatorData(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getMembers();
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

}
