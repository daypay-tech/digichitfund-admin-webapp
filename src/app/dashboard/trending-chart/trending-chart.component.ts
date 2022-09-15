import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartConfiguration, ChartDataset, Color } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { DatePipe } from '@angular/common'
import * as moment from 'moment';

@Component({
  selector: 'app-trending-chart',
  templateUrl: './trending-chart.component.html',
  styleUrls: ['./trending-chart.component.scss']
})
export class TrendingChartComponent implements OnInit {

  title = 'Trending Chart';

  smYears: any[] = [
    {id: '2022', value: '2022'},
    {id: '2021', value: '2021'},
    {id: '2020', value: '2020'},
  ];

  public selectedYear:any;

  public date:any[]=[];

  public members:any[]=[];

  public lineChartLegend = true;

  public lineChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false,
        }
      },
      y: {
        stacked: false,
        grid: {
          borderDash: [6, 2],
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  public categoryId: number | undefined;

  public pollId: number | undefined;

  public fromDate: Date | undefined;

  public toDate: Date | undefined;

  @ViewChild(BaseChartDirective) public chart?: BaseChartDirective;
  
  constructor( private httpService: HttpServiceService, 
    public snackBarService: SnackbarService, 
    public datepipe: DatePipe) { 
      this.selectedYear =  moment().format("YYYY");
      console.log(this.selectedYear);

  }

  public monthsLabels: any[] = [];

  formatDate = (formatDate: Date) =>{
    let trimDate =this.datepipe.transform(formatDate, 'yyyy-MM-dd');
    return trimDate;
   }

   public barChartData: ChartDataset<'bar'>[] = [];


  ngOnInit(): void {
    this.getData();
  }
  
  onYearChanged(){
    this.getData();
  }

  refreshChartDataSet = (labels: any, dataSet: any) => {
      this.monthsLabels = labels;
      this.barChartData = [
        { 
          data: dataSet.maleCountData, 
          label: 'Male',
          backgroundColor: ['#72C6D8'],
          hoverBackgroundColor: ['#72C6D8'],
          barPercentage: 0.52,
          categoryPercentage: 0.38,
        },
        { 
          data: dataSet.femaleCountData, 
          label: 'FeMale',
          backgroundColor: ['#151B54'],
          hoverBackgroundColor: ['#151B54'],
          barPercentage: 0.52,
          categoryPercentage: 0.38,
        }
      ];
      this.chart?.update();
  }

  getData = () => {
    let url = "charts/memberSubscriptionChartData";
    if(this.selectedYear) {
      url = url + "?year="+this.selectedYear;
    }
    this.httpService.get(url).subscribe(res => {
      this.setData(res);
    })
  }

  setData(data: any) {
    let labels = [];
    let dataset:any = {};
    let maleCount:any = [];
    let femaleCount:any = [];
    for(let i = 0;i < data.length;i++) {
      labels.push(data[i].month);
      maleCount.push(data[i].maleCount);
      femaleCount.push(data[i].femaleCount);
    }
    dataset.maleCountData = maleCount;
    dataset.femaleCountData = femaleCount;
    this.refreshChartDataSet(labels, dataset);
  }
}
