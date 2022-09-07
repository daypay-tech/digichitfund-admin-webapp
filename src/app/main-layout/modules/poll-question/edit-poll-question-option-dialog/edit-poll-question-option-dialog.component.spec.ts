import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPollQuestionOptionDialogComponent } from './edit-poll-question-option-dialog.component';

describe('EditPollQuestionOptionDialogComponent', () => {
  let component: EditPollQuestionOptionDialogComponent;
  let fixture: ComponentFixture<EditPollQuestionOptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPollQuestionOptionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPollQuestionOptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
