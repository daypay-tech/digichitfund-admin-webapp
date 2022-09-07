import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public getBaseUrl(): string {
    return environment.baseURL;
  }

  public getApiBaseUrl(): string {
    return environment.baseURL+ '/api/v1';
  }
}