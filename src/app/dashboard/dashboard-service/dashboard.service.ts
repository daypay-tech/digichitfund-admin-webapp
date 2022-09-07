import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private chartSource = new BehaviorSubject(null);

  private progresses: any[] = [];
  
  constructor() { 
    this.progresses = [
    {
      "name":'WhatsApp',
      "code":"progressWA",
      "icon":"icons8-whatsapp-48.png",
      "percent":"25",
      "color":"#BAB86C",
    },
    {
      "name":'Youtube',
      "code":"progressYT",
      "icon":"icons8-youtube-48.png",
      "percent":"33",
      "color":"#BE9D6A",
    },
    {
      "name":'Twitter',
      "code":"progressTR",
      "icon":"icons8-twitter-48.png",
      "percent":"41",
      "color":"#1DA1F2",
    },
    {
      "name":'Facebook',
      "code":"progressFB",
      "icon":"icons8-facebook-48.png",
      "percent":"66",
      "color":"#DF2C14",
    },
    {
      "name":'Instagram',
      "code":"progressIG",
      "icon":"icons8-instagram-48.png",
      "percent":"90",
      "color":"#BAB86C",
    }
  ]
 }

 public getProgresses = () => {
  return this.progresses;
 }
  
  public refreshAllChart = (data: any) => {
    this.chartSource.next(data);
  }

  public subscribeRefreshAllChart = () => {
    return this.chartSource;
  }
}
