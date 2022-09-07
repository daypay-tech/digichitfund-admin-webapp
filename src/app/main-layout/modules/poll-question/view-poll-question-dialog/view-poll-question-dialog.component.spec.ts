import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPollQuestionDialogComponent } from './view-poll-question-dialog.component';

describe('ViewPollQuestionOptionDialogComponent', () => {
  let component: ViewPollQuestionDialogComponent;
  let fixture: ComponentFixture<ViewPollQuestionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPollQuestionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPollQuestionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
