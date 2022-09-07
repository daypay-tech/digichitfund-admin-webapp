import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionChartComponent } from './question-chart.component';

describe('QuestionChartComponent', () => {
  let component: QuestionChartComponent;
  let fixture: ComponentFixture<QuestionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
