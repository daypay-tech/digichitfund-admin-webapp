import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';

@Component({
  selector: 'app-add-poll-question',
  templateUrl: './add-poll-question.component.html',
  styleUrls: ['./add-poll-question.component.scss']
})
export class AddPollQuestionComponent implements OnInit {

  public pollId: any;
  public phoneTitles:any[] = [];
  public questions:any[] = [];
  public categories: any[] = [];
  public question:any;
  public polls:any[] = [];

  constructor(private router: Router, private snackBar: MatSnackBar, private httpService: HttpServiceService) { }
  
    savePoll = () => {
      let payload:any = {};
      payload['pollId'] = this.pollId;
      payload['questions'] = this.questions;
      this.httpService.postJson("questions/saveBulk", payload).subscribe(res => {
        this.router.navigate(['/poll-question']);
      })
    }
  
    ngOnInit(): void {
      this.getPolls();
      this.getCategories();
    }

    getCategories = () => {
      this.httpService.get('categories').subscribe(res => {
        console.log("templates data");
        console.log(res);
        this.categories = res;
      })
    }
    viewPollQuestions= () => {
      this.router.navigate(['/poll-question']);
    }
    getPolls = () => {
      this.httpService.get("polls/flatPolls").subscribe(res => {
        this.polls = res;
      })
    }
    cancel = () => {
      this.router.navigate(['/poll']);
    }

    addQuestion = (): void => {
      let question: any = {};
      question['question'] = '';
      question.options = [];
      this.questions.push(question);
    }
  
    removeQuestion = ($index: any): void => {
      this.questions.splice($index, 1);
    }

    addOption = (question:any): void => {
      if(question.options && question.options.length == 6) {
        this.snackBar.open('Maximum options creation reached', 'close');
        return;
      }
      let option: any = {};
      option['option'] = '';
      question.options.push(option);
    }
  
    removeOption= (question:any, optionIndex: any): void => {
      question.options.splice(optionIndex, 1);
    }

}
