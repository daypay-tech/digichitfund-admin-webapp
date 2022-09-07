import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-account-datatable',
  templateUrl: './account-datatable.component.html',
  styleUrls: ['./account-datatable.component.css']
})
export class AccountDatatableComponent implements OnInit {

  
displayedColumns: string[] = ['id','firstName','lastName','email', 'mobile'];

public dataSource = new MatTableDataSource<any>();
  categoryName: any;
  public paginator: MatPaginator | undefined;
  public PAGE_DFAULT_SIZE = 5;
  public page: any = 0;
  public pageSize = this.PAGE_DFAULT_SIZE;
  public currentPage = 0;
  public totalSize: number= 0;
  public isRefreshing = false;
  public categoryId: any;

  constructor(private router: Router, private httpService: HttpServiceService,
    public snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.getData();
  }

  public getAccountPaginatorData(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }
  addAccount = () => {
    this.router.navigate(['/account/add-account']);

  }

  edit = (id: any) => {
    this.router.navigate(['/account/edit-account'], {queryParams:{id: id}});
  console.log(id)
  }

  getData = () => {
    this.httpService.get('administrations/users').subscribe(res => {
      this.refreshDataTable(res);
    })
  }

  private refreshDataTable = (res: any) => {
    this.dataSource.data = res.data;
    console.log(res);
    this.dataSource._updateChangeSubscription();
  }

}
