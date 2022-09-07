import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {


  public categoryName: any;
  id: any;
  viewCategory= () => {
    this.router.navigate(['/category']);
  }
  constructor(private router: Router,private route: ActivatedRoute,
    private httpService: HttpServiceService, public snackBarService: SnackbarService) {
    this.id = this.route.snapshot.queryParams['id'];
    }
    cancel = () => {
      this.router.navigate(['/category']);
    }
  ngOnInit(): void {
    this.getData();
  }
  getData = () => {
    this.httpService.get('categories/'+this.id).subscribe(res => {
      this.setData(res);
    })
  }

  setData(data: any) {
    this.categoryName = data.categoryName;
  }
  update = () => {
    let payload: any = {};
    payload['id'] =this.id;
    payload['categoryName'] = this.categoryName;
    this.httpService.put('categories/'+this.id, payload).subscribe(res => {
      this.snackBarService.showSuccessMessage("Successfully Updated");
      this.router.navigate(['/category']);
    })
  }
}
