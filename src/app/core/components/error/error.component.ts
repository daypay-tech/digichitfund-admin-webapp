import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay } from 'rxjs/operators';
import { ErrorNotificationService } from '../../services/error-notification.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  public hasError: boolean = false;

  private sub: any

  constructor(private errorService: ErrorNotificationService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.listenToError();
  }

  listenToError(): void {
    this.sub = this.errorService.errorSub.pipe(delay(0)).subscribe((res) => {
      if(res != false) {
        this.hasError = true;
        console.log("error handler ============= component");
        this.showError(res);
      }
    });
  }

  showError(message: string): void {
    //this.snackBar.open(message, 'X', {panelClass: ['error']});
    alert(message);
  }

  ngOnDestroy() {
    if(this.sub) {
      //this.sub.unsubscribe();
    }
  }
}
