import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  
  public loading: boolean = true;

  color: ThemePalette = 'accent';
  
  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.spinnerService.loadingSub.pipe(delay(0)).subscribe((loading) => {
      this.loading = loading;
    });
  }
}