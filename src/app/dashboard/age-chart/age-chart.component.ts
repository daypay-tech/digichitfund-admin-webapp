import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { DashboardService } from '../dashboard-service/dashboard.service';

@Component({
  selector: 'app-age-chart',
  templateUrl: './age-chart.component.html',
  styleUrls: ['./age-chart.component.scss']
})
export class AgeChartComponent implements OnInit {

  title = 'Age bar chart';

  public categoryId: number | undefined;

  public pollId: number | undefined;

  public fromDate: Date | undefined;

  public toDate: Date | undefined;

  public chartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    //indexAxis: 'y',
  };

  public chartColors: any[] = [
    { backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"] }
  ];

  public ageChartDatasets: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  public chartLegend = true;

  public chartPlugins = [];

  @ViewChild(BaseChartDirective) public chart?: BaseChartDirective;

  constructor(private httpService: HttpServiceService, 
    private dashboardService: DashboardService,
    private datepipe: DatePipe,
    public snackBarService: SnackbarService) { }

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
    this.ageChartDatasets = {labels:[], datasets:[]};
    this.ageChartDatasets.labels = labels;
    this.ageChartDatasets.datasets = data;
    this.chart?.update();
  }
  

  getData = () => {
    let url = "charts/ageCharts";
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
    let labels:any = [];
    for(let i = 0;i < data.length;i++) {
      labels.push(data[i].range);
    }
    let dataset:any = [];
    for(let l = 0;l < labels.length;l++) {
      let row: any = {};
      row['label'] = labels[l];
      let rowData:any[] = [];
      for(let i = 0;i < data.length;i++) {
        if(data[i]['range'] == labels[l]) {
          rowData.push(data[i].respondedCount);
        } else {
          rowData.push(0);
        }
      }
      row['data'] = rowData;
      dataset.push(row);
    }
    console.log(dataset);
    this.refreshChartDataSet(labels, dataset);
  }
}
