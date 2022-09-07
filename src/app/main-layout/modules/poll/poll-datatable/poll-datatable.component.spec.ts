import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollDatatableComponent } from './poll-datatable.component';

describe('PollDatatableComponent', () => {
  let component: PollDatatableComponent;
  let fixture: ComponentFixture<PollDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollDatatableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
