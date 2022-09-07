import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingChartComponent } from './trending-chart.component';

describe('TrendingChartComponent', () => {
  let component: TrendingChartComponent;
  let fixture: ComponentFixture<TrendingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
