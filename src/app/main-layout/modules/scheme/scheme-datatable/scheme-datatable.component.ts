import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewRef } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-scheme-datatable',
  templateUrl: './scheme-datatable.component.html',
  styleUrls: ['./scheme-datatable.component.css']
})
export class SchemeDatatableComponent implements OnInit {


  displayedColumns: string[] = ['id','schemeName','totalAmount', 'totalMembers','calenderType','startDate',
  'publish','addMember','edit','delete'];
  public dataSource = new MatTableDataSource<any>();
    categoryName: any;
    public paginator: MatPaginator | undefined;
    public PAGE_DFAULT_SIZE = 5;
    public page: any = 0;
    public pageSize = this.PAGE_DFAULT_SIZE;
    public currentPage = 0;
    public totalSize: number= 0;
    public isRefreshing = false;
    public createdAt: any;
  
  
  constructor(private router:Router,private cdr:ChangeDetectorRef, private httpService: HttpServiceService,
    public snackbarService: SnackbarService, public datepipe: DatePipe) { }
  
    viewScheme= () => {
    this.router.navigate(['/scheme/add-scheme']);
  }
  addMember= () => {
    this.router.navigate(['/members/add-member']);
  }
  formatDate = (formatDate: Date) =>{
    let trimDate =this.datepipe.transform(formatDate, 'dd/MM/yyyy');
    return trimDate;
   }
  
  
  ngOnInit(): void {
    // this.getCategoryData();
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
    this.router.navigate(['/scheme/edit-scheme'], {queryParams:{id: id}});
  console.log(id)
  }
  
  doDelete (id: any) {
    let payload = {};
    this.httpService.delete('scheme/'+id, payload).subscribe(res => {
      this.snackbarService.showSuccessMessage("Successfully Deleted..");
      this.router.navigate(['/scheme']);
      this.getCategoryData();
    })
  }
  getCategoryData = () => {
    let page = this.currentPage + 1;
    let url = 'categories?page='+page+'&pageSize='+this.pageSize;
    this.httpService.get(url).subscribe(res => {
      this.refreshDataTable(res);
    })
  }
  
  public getCategoryPaginatorData(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getCategoryData();
  }
  
  }