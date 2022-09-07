import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackBar: MatSnackBar) {

  }

  public showSuccessMessage(message: string): void {
    this.snackBar.open(message, 'x', {duration: 2000,});
  }

  public showErrorMessage(message: string): void {
    this.snackBar.open(message, 'x', {duration: 2000,});
  }
}