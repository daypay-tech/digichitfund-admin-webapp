import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { DashboardService } from '../dashboard-service/dashboard.service';

@Component({
  selector: 'app-gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.scss']
})
export class GenderChartComponent implements OnInit {

  title = 'Gender';

  public chartOptions: ChartOptions<'bar'> = {
    responsive: false,
  };
  public chartLabels = [];

  public chartDatasets:any = [];

  public chartLegend = true;

  public chartPlugins = [];

  public categoryId: number | undefined;

  public pollId: number | undefined;

  public fromDate: Date | undefined;

  public toDate: Date | undefined;

  @ViewChild(BaseChartDirective) public chart?: BaseChartDirective;

  constructor(private httpService: HttpServiceService,
     public snackBarService: SnackbarService,
     private dashboardService: DashboardService,
     public datepipe:DatePipe) { }


    formatDate = (formatDate: Date) =>{
      let trimDate =this.datepipe.transform(formatDate, 'yyyy-MM-dd');
      return trimDate;
    }
    ngOnInit(): void {
    this.listenChartDataChange();
  }

  public listenChartDataChange = () => {
    this.dashboardService.subscribeRefreshAllChart().subscribe(data => {
      if(!data) {
        return;
      }
      console.log(data);
      this.categoryId = data['categoryId'];
      this.pollId = data['pollId'];
      this.fromDate = data['fromDate'];
      this.toDate = data['toDate'];
      this.getData();
    })
  }

  refreshChartDataSet = (labels: any, data: any[]) => {
    this.chartDatasets = [];
    this.chartLabels = [];
    let dataset:any = {};
    this.chartLabels = labels;
    dataset['data'] = data;
    dataset['backgroundColor'] = ['blue'];
    dataset['hoverBackgroundColor'] = ['#ADD8E6'];
    dataset['barThickness'] = 32;
    dataset['maxBarThickness'] = 34;
    this.chartDatasets.push(dataset);
    this.chart?.update();
  }
  

  getData = () => {
    let url = "charts/genderCharts";
    if(this.categoryId) {
      url = url + "?categoryId="+this.categoryId;
    }
    if(this.pollId) {
      url = url + "&pollId="+this.pollId;
    }
    if(this.fromDate) {
      url = url + "&fromDate="+this.formatDate(this.fromDate);
    }
    if(this.toDate) {
      url = url + "&toDate="+this.formatDate(this.toDate);
    }   
   
    this.httpService.get(url).subscribe(res => {
      this.setData(res);
    })
  }

  setData(data: any) {
    let labels = [];
    let dataset = [];
    for(let i = 0;i < data.length;i++) {
      labels.push(data[i].genderLabel);
      dataset.push(data[i].respondedCount);
    }
    this.refreshChartDataSet(labels, dataset);
  }

}
