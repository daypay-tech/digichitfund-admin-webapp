import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HttpServiceService } from '../shared/services/http/http-service.service';
import { SnackbarService } from '../shared/services/snackbar/snackbar.service';
import { DashboardService } from './dashboard-service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  charts: any;
  public categories: any[] = [];
  public categoryId: any;
  public pollId: any;
  public pollName: any;
  public polls: any[] = [];
  public questions: any[] = [];
  public question: any[] =[];
  public fromDate : any;
  public toDate :any;
  public progresses: any[] = [];
  public progress: any;
  public publishedPolls:any = 'Published Polls';
  public chartLabels:any = [];
  public chartLegend = true;

  @ViewChild(BaseChartDirective) public chart?: BaseChartDirective;

  smYears: any[] = [
    {id: '2022', value: '2022'},
    {id: '2021', value: '2021'},
    {id: '2020', value: '2020'},
  ];
  filters: any[] = [
    {id: 'byTime', value: 'Time'},
    {id: 'byTraffic', value: 'Traffic'},
    {id: 'byViews', value: 'Views'},
  ];

  public barChartData: ChartDataset<'bar'>[] = [];

    public overallGenderCohortChartData: ChartDataset<'bar'>[] = [];
    public overallGenderCohortChartLabels = [];
    public overallGenderCohortChartOptions: ChartOptions<'bar'> = {
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
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'bottom',
        },
      },
    };

    public overallAgeCohortChartData: ChartDataset<'bar'>[] = [];
    public overallAgeCohortChartLabels = [];
    public overallAgeCohortChartOptions: ChartOptions<'bar'> = {
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
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    };

    public lineChartLegend = true;

    public lineChartOptions: ChartOptions<'bar'> = {
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
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    };

  constructor(private router: Router,private httpService: HttpServiceService,
    public snackbarService: SnackbarService, private dashboardService: DashboardService) {
      this.progresses = this.dashboardService.getProgresses();
  }
    
ngOnInit(): void {
  this.getCategories();
}

getCategories = () => {
  this.httpService.get('categories').subscribe(res => {
    this.categories = res;
  })
}

public fetchPollByCategory() {
  this.getPolls();
}

cancel() {
  window.location.reload();
 }
getPolls = () => {
  let url = "polls/flatPolls";
  if(this.categoryId) {
    url = url + "?categoryId="+this.categoryId;
  }
  this.httpService.get(url).subscribe(res => {
    this.polls = res;
  })
}
  submit = () => {
    this.reset();
    this.getPollResults();
  }

  reset = () => {
    this.overallAgeCohortChartData = [];
    this.overallGenderCohortChartData = [];
    this.questions = [];
  }

  getData = () => {
    let url = "charts/questionChartData";
    if(this.categoryId) {
      url = url + "?categoryId="+this.categoryId;
    }
    if(this.pollId) {
      url = url + "&pollId="+this.pollId;
    }
   
    this.httpService.get(url).subscribe(res => {
      this.questions = res;
    })
  }

  getPollResults = () => {
    let url = "charts/pollResults";
    if(this.categoryId) {
      url = url + "?categoryId="+this.categoryId;
    }
    if(this.pollId) {
      url = url + "&pollId="+this.pollId;
    }
   
    this.httpService.get(url).subscribe(res => {
      this.setPollResultData(res);
    })
  }

  refreshOverallGenderChartDataSet = (labels: any, dataSet: any) => {
    this.overallGenderCohortChartLabels = labels;
    this.overallGenderCohortChartData = [
      { 
        data: dataSet.data, 
        label: 'Gender',
        backgroundColor: ['#72C6D8', '#3336FF', '#E4CC06'],
        hoverBackgroundColor: ['#72C6D8', '#3336FF', '#E4CC06'],
        barPercentage: 0.52,
        categoryPercentage: 0.38,
      }
    ];
    this.chart?.update();
  }

  setPollResultData = (data: any) => {
    if(data.overAllGenderChartData) {
      let labels = [];
      let dataset:any = {};
      let counts:any = [];
      for(let i = 0;i < data.overAllGenderChartData.length;i++) {
        labels.push(data.overAllGenderChartData[i].gender);
        counts.push(data.overAllGenderChartData[i].count);
      }
      dataset.data = counts;
      this.refreshOverallGenderChartDataSet(labels, dataset);
    }
    if(data.overallAgeResultData) {
      let labels = [];
      let dataset:any = [];
      let maleCount: any = [];
      let femaleCount: any = [];
      let othersCount: any = [];
      for(let i = 0;i < data.overallAgeResultData.length;i++) {
        labels.push(data.overallAgeResultData[i].range);
        maleCount.push(data.overallAgeResultData[i].maleCount);
        femaleCount.push(data.overallAgeResultData[i].femaleCount);
        othersCount.push(data.overallAgeResultData[i].othersCount);
      }
      dataset = [
        {
          data: maleCount, 
          label: 'Male',
          backgroundColor: ['#72C6D8'],
          hoverBackgroundColor: ['#72C6D8']
        },
        {
          data: femaleCount, 
          label: 'Female',
          backgroundColor: ['#3336FF'],
          hoverBackgroundColor: ['#3336FF']
        },
        {
          data: othersCount, 
          label: 'Others',
          backgroundColor: ['#E4CC06'],
          hoverBackgroundColor: ['#E4CC06']
        }
      ];
      console.log(dataset);
      this.refreshOverallAgeChartDataSet(labels, dataset);
    }
    if(data.questionChartDataList) {
      this.constructAllQuestionChart(data.questionChartDataList); 
    }
  }

  refreshOverallAgeChartDataSet = (labels: any, dataSet: any) => {
    this.overallAgeCohortChartData = [];
    this.overallAgeCohortChartLabels = labels;
    this.overallAgeCohortChartData = dataSet;
    this.chart?.update();
  }

  constructAllQuestionChart = (data: any[]) => {
    this.questions = [];
    for(let i = 0;i < data.length;i++) {
      let question:any = {};
      question.id = data[i].id;
      question.question = data[i].question;
      question.pollOverallResultChartData = this.constructTopOverallResultsChart(data[i].optionChartDataList);
      question.genderChartData = this.constructQuestionGenderCohortResultChartData(data[i].ageResultData);
      question.ageChartData = this.constructQuestionAgeCohortResultChartData(data[i].optionChartDataList);
      question.optionAgeChartData = this.constructQuestionOptionByAgeCohortResultChartData(data[i].optionAgeChartDataList);
      this.questions.push(question);
    }
  }

  constructTopOverallResultsChart = (options:any[]) => {
    let pollOverallResultChartData:any = {};
    pollOverallResultChartData.chartLabels = [];
    pollOverallResultChartData.chartOptions = {
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
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    }
    pollOverallResultChartData.barChartData = [];
    if(!options) {
      return pollOverallResultChartData;
    }
    let labels = [];
    let counts:any = [];
    for(let j = 0;j < options.length;j++) {
      labels.push(options[j].option);
      counts.push(options[j].count);
    }
    pollOverallResultChartData.chartLabels = labels;
    pollOverallResultChartData.barChartData = [
      { 
        data: counts, 
        backgroundColor: ['#72C6D8'],
        hoverBackgroundColor: ['#72C6D8'],
        barPercentage: 0.52,
        categoryPercentage: 0.38,
      }
    ];
    return pollOverallResultChartData;
  }

  constructQuestionGenderCohortResultChartData = (ageByGenderData:any[]) => {
    let ageGroupByGenderChartData:any = {};
    ageGroupByGenderChartData.chartLabels = [];
    ageGroupByGenderChartData.chartOptions = {
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
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    }
    ageGroupByGenderChartData.barChartData = [];
    if(!ageByGenderData || ageByGenderData.length == 0) {
      return ageGroupByGenderChartData;
    }
      let labels = [];
      let dataset:any = [];
      let maleCount: any = [];
      let femaleCount: any = [];
      let othersCount: any = [];
      for(let i = 0;i < ageByGenderData.length;i++) {
        labels.push(ageByGenderData[i].range);
        maleCount.push(ageByGenderData[i].maleCount);
        femaleCount.push(ageByGenderData[i].femaleCount);
        othersCount.push(ageByGenderData[i].othersCount);
      }
      dataset = [
        {
          data: maleCount, 
          label: 'Male',
          backgroundColor: ['#72C6D8'],
          hoverBackgroundColor: ['#72C6D8']
        },
        {
          data: femaleCount, 
          label: 'Female',
          backgroundColor: ['#3336FF'],
          hoverBackgroundColor: ['#3336FF']
        },
        {
          data: othersCount, 
          label: 'Others',
          backgroundColor: ['#E4CC06'],
          hoverBackgroundColor: ['#E4CC06']
        }
      ];
    ageGroupByGenderChartData.chartLabels = labels;
    ageGroupByGenderChartData.barChartData = dataset;
    return ageGroupByGenderChartData;
  }

  constructQuestionAgeCohortResultChartData = (options:any[]) => {
    let pollOverallResultChartData:any = {};
    pollOverallResultChartData.chartLabels = [];
    pollOverallResultChartData.chartOptions = {
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
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    }
    pollOverallResultChartData.barChartData = [];
    if(!options) {
      return pollOverallResultChartData;
    }
    let labels = [];
    let counts:any = [];
    for(let j = 0;j < options.length;j++) {
      labels.push(options[j].option);
      counts.push(options[j].count);
    }
    pollOverallResultChartData.chartLabels = labels;
    pollOverallResultChartData.barChartData = [
      { 
        data: counts, 
        backgroundColor: ['#72C6D8', '#3336FF', '#E4CC06'],
        hoverBackgroundColor: ['#72C6D8', '#3336FF', '#E4CC06'],
        barPercentage: 0.52,
        categoryPercentage: 0.38,
      }
    ];
    return pollOverallResultChartData;
  }

  constructQuestionOptionByAgeCohortResultChartData = (optionAgeChartDataList: any) => {
    let pollOverallResultChartData:any = {};
    pollOverallResultChartData.chartLabels = [];
    pollOverallResultChartData.chartOptions = {
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
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    }
    pollOverallResultChartData.barChartData = [];
    if(!optionAgeChartDataList) {
      return pollOverallResultChartData;
    }
    let ranges:any = [];
    Object.keys(optionAgeChartDataList).forEach(el => {
      console.log(el, optionAgeChartDataList[el]);
      if(ranges.length == 0) {
        Object.keys(optionAgeChartDataList[el]).forEach(key => {
          ranges.push(optionAgeChartDataList[el][key]['range']);
        });
      }
    });
    pollOverallResultChartData.chartLabels = ranges;
    pollOverallResultChartData.barChartData = [];
    let colors:any = ['#F56440', '#87F72A', '#2AF7A9', '#2A55F7','#B62AF7','#F81B94'];
    let idx = 0;
    Object.keys(optionAgeChartDataList).forEach(el => {
      let counts:any[] = [];
      let data = optionAgeChartDataList[el];
      for(let idx = 0;idx < data.length;idx++) {
        counts.push(data[idx].count);
      }
      pollOverallResultChartData.barChartData.push(
        {
          data: counts,
          label: el,
          backgroundColor: [colors[idx]],
          hoverBackgroundColor: [colors[idx]],
          barPercentage: 0.52,
          categoryPercentage: 0.38,
        }
      )
      idx = idx + 1;
    });
    return pollOverallResultChartData;
  }
}
