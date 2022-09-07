import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  public categoryName: any;


  constructor(private router: Router, private httpService: HttpServiceService,
    public snackbarService: SnackbarService) { }
    ngOnInit(): void {

    }
    cancel = () => {
      this.router.navigate(['/category']);
    }
    viewCategory= () => {
      this.router.navigate(['/category']);
    }
    saveCategory = () => {
      let payload: any = {};
      payload['categoryName'] = this.categoryName;
      this.httpService.postJson('categories', payload).subscribe(res => {
        this.snackbarService.showSuccessMessage("Successfully Saved");
        this.router.navigate(['/category']);
      })
    }
  }
