import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})

export class ErrorNotificationService {
  errorSub: Subject<any> = new Subject<any>();

  constructor(private snackBar: MatSnackBar) {

  }

  public showError = (error: any) => {
      console.log(error);
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
      // Get client-side error
          errorMessage = error.error.message;
      } else {
      // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      //this.errorSub.next(error);
     alert(errorMessage);
     //this.snackBar.open(errorMessage, 'X', {panelClass: ['error']});
  }
}