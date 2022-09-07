import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient,
    private configService: ConfigService) { }

  public postJson(path: string, payload: any): Observable<any> {
    const url = this.configService.getApiBaseUrl()+'/'+path;
    return this.httpClient.post<any>(url, payload);
  }

  public get(path: string): Observable<any> {
    const url = this.configService.getApiBaseUrl()+'/'+path;
    return this.httpClient.get<any>(url);
  }

  public postFormData(path: string, formData: FormData) {

  }

  public put(path: string, payload: any) {
    const url = this.configService.getApiBaseUrl()+'/'+path;
    return this.httpClient.put(url,payload);
  }

  public delete(path: string, payload?: any) {
    const url = this.configService.getApiBaseUrl()+'/'+path;
    return this.httpClient.delete(url,payload);
  }

  public getPaginationData(path:any, page: any = 0, pageSize: any= 10, searchQuery?: any) {
    if(!page) {
      page = page + 1;
    }
    const url = this.configService.getApiBaseUrl()+'/'+path+"?page="+page+"&pageSize="+pageSize;
    return this.httpClient.get<any>(url);
  }
}
