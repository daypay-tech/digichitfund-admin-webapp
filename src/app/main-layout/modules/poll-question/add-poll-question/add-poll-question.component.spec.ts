import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPollQuestionComponent } from './add-poll-question.component';

describe('AddPollQuestionComponent', () => {
  let component: AddPollQuestionComponent;
  let fixture: ComponentFixture<AddPollQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPollQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPollQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
