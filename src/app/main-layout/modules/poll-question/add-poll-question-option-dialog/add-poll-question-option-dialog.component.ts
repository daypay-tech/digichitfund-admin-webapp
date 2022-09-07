import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/shared/services/http/http-service.service';

@Component({
  selector: 'app-add-poll-question-option-dialog',
  templateUrl: './add-poll-question-option-dialog.component.html',
  styleUrls: ['./add-poll-question-option-dialog.component.scss']
})
export class AddPollQuestionOptionDialogComponent implements OnInit {

  public options:any[] = [];
  public selectedQuestionId:any;
  constructor(
    private httpService: HttpServiceService,
    public dialogRef: MatDialogRef<AddPollQuestionOptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
  ) {
      this.selectedQuestionId = data.id;
   }

  ngOnInit(): void {
  }


  getPollQuestionOptions = () => {
    this.httpService.get("questions/"+this.selectedQuestionId+"/options").subscribe(res => {
      this.options = this.options;
    })
  }

  addOption = () => {
    let option:any = {};
    option['option'] = '';
    this.options.push(option);
  }

  removeOption = ($index: number) => {
    this.options.splice($index, 1);
  }

  saveQuestionOption = () => {
    let payload = this.options;
    this.httpService.postJson("questions/"+this.selectedQuestionId+"/options", payload).subscribe(res => {
      this.dialogRef.close();
    })
  }

  cancelDialog = () => {
    this.dialogRef.close();
  }
}
