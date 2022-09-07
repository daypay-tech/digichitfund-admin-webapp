import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPollQuestionComponent } from './edit-poll-question.component';

describe('EditPollQuestionComponent', () => {
  let component: EditPollQuestionComponent;
  let fixture: ComponentFixture<EditPollQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPollQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPollQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
