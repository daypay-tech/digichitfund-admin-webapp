import { ErrorHandler, Injectable } from '@angular/core';
import { SnackbarService } from '../shared/services/snackbar/snackbar.service';
import { ErrorNotificationService } from './services/error-notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    
    constructor(private errorService: ErrorNotificationService) {

    }

    public handleError(error: any): void {
        console.log("global error handler ===== handleError()");
        console.log(error);
        this.errorService.showError(error);
    }
}