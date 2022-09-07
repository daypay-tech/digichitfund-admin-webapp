import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { DashboardService } from '../dashboard-service/dashboard.service';

@Component({
  selector: 'app-question-chart',
  templateUrl: './question-chart.component.html',
  styleUrls: ['./question-chart.component.scss']
})
export class QuestionChartComponent implements OnInit {

  public charts:any[] = [];

  public categoryId: number | undefined;

  public pollId: number | undefined;

  public fromDate: Date | undefined;

  public toDate: Date | undefined;

  constructor( private httpService: HttpServiceService, 
    private dashboardService: DashboardService,
    public snackBarService: SnackbarService,
    public datepipe: DatePipe) { 

  }

  formatDate = (formatDate: Date) =>{
    let trimDate =this.datepipe.transform(formatDate, 'yyyy-MM-dd');
    return trimDate;
   }

  ngOnInit(): void {
    this.listenChartDataChange();
  }
  // public question:any;
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

  drawChart = (questions: any) => {
    this.charts = [];
    for(let i =0;i < questions.length;i++) {
      let chart:any = {};
      let result = this.getQuestionOptionsLabels(questions[i].optionChartDataList);
      chart.chartOptions = { 
        responsive: false,
        // scales: {
        //   yAxes: [{
        //     scaleLabel: {
        //       display: true,
        //       labelString: questions[i].question
        //     }
        //   }]
        // }
      };
      chart.chartDatasets = {};
      chart.chartDatasets.datasets = result.datasets;
      chart.chartDatasets.labels = result.labels;
      chart.chartLegend = true;
      chart.chartPlugins = [];
      chart.question = questions[i].question;
      this.charts.push(chart);
    }
  }

  getData = () => {
    let url = "charts/questionCharts";
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
      this.drawChart(res);
    })
  }

  getQuestionOptionsLabels = (dataOptions: any) => {
    let result:any = {};
    let labels:any = [];
    for(let i = 0;i < dataOptions.length;i++) {
      labels.push(dataOptions[i].option);
    }
    let dataset:any = [];
    for(let l = 0;l < labels.length;l++) {
      let row: any = {};
      row['label'] = labels[l];
      let rowData:any[] = [];
      for(let i = 0;i < dataOptions.length;i++) {
        if(dataOptions[i]['option'] == labels[l]) {
          rowData.push(dataOptions[i].count);
        } else {
          rowData.push(0);
        }
      }
      row['data'] = rowData;
      dataset.push(row);
    }
    result['labels'] = labels;
    result['datasets'] = dataset;
    return result;
  }
}
