import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';

@Component({
  selector: 'app-view-poll-question-dialog',
  templateUrl: './view-poll-question-dialog.component.html',
  styleUrls: ['./view-poll-question-dialog.component.scss']
})
export class ViewPollQuestionDialogComponent implements OnInit {

  public options:any[] = [];
  public selectedPollId:any;
  public questions:any[] = [];
  
  constructor(
    private httpService: HttpServiceService,
    public dialogRef: MatDialogRef<ViewPollQuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
  ) {
      this.selectedPollId = data.id;
   }

  ngOnInit(): void {
    this.getPollQuestionOptions();
  }


  getPollQuestionOptions = () => {
    this.httpService.get("questions/flat?pollId="+this.selectedPollId).subscribe(res => {
      this.questions = res;
    })
  }

  closeDialog = () => {
    this.dialogRef.close();
  }
}
