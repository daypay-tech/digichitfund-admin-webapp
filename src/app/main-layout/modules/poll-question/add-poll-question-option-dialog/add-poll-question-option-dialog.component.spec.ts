import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPollQuestionOptionDialogComponent } from './add-poll-question-option-dialog.component';

describe('AddPollQuestionOptionDialogComponent', () => {
  let component: AddPollQuestionOptionDialogComponent;
  let fixture: ComponentFixture<AddPollQuestionOptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPollQuestionOptionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPollQuestionOptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
