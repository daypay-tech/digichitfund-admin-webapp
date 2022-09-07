import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollQuestionDatatableComponent } from './poll-question-datatable.component';

describe('PollQuestionDatatableComponent', () => {
  let component: PollQuestionDatatableComponent;
  let fixture: ComponentFixture<PollQuestionDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollQuestionDatatableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollQuestionDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
