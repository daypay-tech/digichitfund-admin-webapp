import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-category-datatable',
  templateUrl: './category-datatable.component.html',
  styleUrls: ['./category-datatable.component.scss']
})
export class CategoryDatatableComponent implements OnInit {


displayedColumns: string[] = ['id','name','createdBy', 'postedOn','edit','delete'];
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
  public createdAt: any;


constructor(private router:Router,private cdr:ChangeDetectorRef, private httpService: HttpServiceService,
  public snackbarService: SnackbarService, public datepipe: DatePipe) { }
  
// viewCategory = () => {
//   // this.router.navigate(['/category/add-category']);
//   this.snackbarService.showSuccessMessage("Coming Soon!");
// }

viewCategory= () => {
  this.router.navigate(['/category/add-category']);
}

formatDate = (formatDate: Date) =>{
  let trimDate =this.datepipe.transform(formatDate, 'dd/MM/yyyy');
  return trimDate;
 }


ngOnInit(): void {
  this.getData();
}

getData = () => {
  this.httpService.get('categories').subscribe(res => {
    this.refreshDataTable(res);
  })
}

private refreshDataTable = (res: any) => {
  this.dataSource.data = res;
  console.log(res);
  this.createdAt = res.createdAt;
  this.dataSource._updateChangeSubscription();
}

edit = (id: any) => {
  this.router.navigate(['/category/edit-category'], {queryParams:{id: id}});
console.log(id)
}

doDelete (id: any) {
  let payload = {};
  this.httpService.delete('categories/'+id, payload).subscribe(res => {
    this.snackbarService.showSuccessMessage("Successfully Deleted..");
    this.router.navigate(['/category']);
    this.getData();
  })
}
getCategoryData = () => {
  let page = this.currentPage + 1;
  let url = 'categories?page='+page+'&pageSize='+this.pageSize;
  if(this.categoryId) {
    url = url +'&categoryId='+this.categoryId;
  }
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
