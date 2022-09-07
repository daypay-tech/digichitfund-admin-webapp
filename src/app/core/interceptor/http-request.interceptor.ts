import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';
import { StorageService } from '../services/storage.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService, 
    private spinner: SpinnerService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.setLoading(true);
    console.log("Http interceptor loading");
    let header:any = {};
    header['X-CLIENT-ACCESS-TYPE'] = 'administration_app';
    let accessToken = this.storageService.getAccessToken();
    if(accessToken){
        header['Authorization'] = 'Bearer '+accessToken;
    }
    request = request.clone({ setHeaders: header});
    return next.handle(request)
        .pipe(catchError((err) => {
            console.log("Http interceptor error");
            this.spinner.setLoading(false);
            return throwError(err);
        }))
        .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
            if (evt instanceof HttpResponse) {
                console.log("Http interceptor response");
                this.spinner.setLoading(false);
            }
            return evt;
        }));
  }
}
