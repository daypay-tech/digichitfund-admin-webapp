import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';

@Component({
  selector: 'app-edit-poll-question',
  templateUrl: './edit-poll-question.component.html',
  styleUrls: ['./edit-poll-question.component.scss']
})
export class EditPollQuestionComponent implements OnInit {

  public categoryName: any;
  public pollName: any;
  public status: any;
  public statusList: any[] = [];
  public questions:any[] = [];
  public categories: any[] = [];
  public pollId: any;
  public polls:any[] = [];
  public categoryId:any;

  constructor(private router: Router, private route: ActivatedRoute, 
    private httpService: HttpServiceService, private snackBar: MatSnackBar) { 
      this.pollId = this.route.snapshot.queryParams['pollId'];
  }
  
    update = () => {
      try {
        if(!this.pollId) {
          throw new Error("Please select Poll");
        }
        let payload: any = {};
        payload['pollId'] = this.pollId;
        if(!this.questions || this.questions.length == 0) {
          throw new Error("Question must not be empty");
        }
        payload['questions'] = this.questions;
        console.log(payload);
        this.httpService.put("questions/updateBulk", payload).subscribe(res => {
          this.router.navigate(['/poll-question'])
        })
      } catch(error: any) {
        console.log(error['message']);
      }
    }
    
    cancel= () => {
      this.router.navigate(['/poll-question'])
    }

    ngOnInit(): void {
      this.getCategories();
    }

    getCategories = () => {
      this.httpService.get('categories').subscribe(res => {
        console.log("templates data");
        console.log(res);
        this.getPolls();
        this.categories = res;
      })
    }

    viewPollQuestions= () => {
      this.router.navigate(['/poll-question']);
    }

    getPollQuestion = () => {
      this.httpService.get("questions/details?pollId="+this.pollId).subscribe(res => {
         this.questions = res.questions;
         this.pollId = res.pollId;
         this.categoryId = res.categoryId;
      })
    }

    getPolls = () => {
      this.httpService.get("polls/flatPolls").subscribe(res => {
        this.polls = res;
        this.getPollQuestion();
      })
    }

    addQuestion = (): void => {
      let question: any = {};
      question['question'] = '';
      question.options = [];
      this.questions.push(question);
    }
  
    removeQuestion = ($index: any, questionId?: any): void => {
      if(questionId) {
        this.httpService.delete('questions/'+questionId).subscribe(res => {
          this.questions.splice($index, 1);
        })
      } else {
        this.questions.splice($index, 1);
      }
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
  
    removeOption= (question:any, optionIndex: any, optionId?:any): void => {
      if(question.id && optionId) {
        this.httpService.delete('questions/'+question.id+"/options/"+optionId).subscribe(res => {
          question.options.splice(optionIndex, 1);
        })
      } else {
        question.options.splice(optionIndex, 1);
      }
    }

}
