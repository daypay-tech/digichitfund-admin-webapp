import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewRef } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-invite-datatable',
  templateUrl: './invite-datatable.component.html',
  styleUrls: ['./invite-datatable.component.css']
})
export class InviteDatatableComponent implements OnInit {

 
  displayedColumns: string[] = ['id','mobileNumber','email','status','action'];
  public paginator: MatPaginator | undefined;
  public PAGE_DFAULT_SIZE = 2;
  public page: any = 0;
  public pageSize = this.PAGE_DFAULT_SIZE;
  public currentPage = 0;
  public totalSize: number= 0;
  public isRefreshing = false;

 public dataSource = new MatTableDataSource<any>();

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

public getPaginatorData(event: PageEvent) {
  this.currentPage = event.pageIndex;
  this.pageSize = event.pageSize;
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

  
  delete (id: any) {
    let payload = {};
    this.httpService.delete('invite/'+id, payload).subscribe(res => {
      this.snackbarService.showSuccessMessage("Successfully Deleted..");
      this.router.navigate(['/invite']);
    })
  }
}
