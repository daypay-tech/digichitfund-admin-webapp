import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDatatableComponent } from './organization-datatable.component';

describe('OrganizationDatatableComponent', () => {
  let component: OrganizationDatatableComponent;
  let fixture: ComponentFixture<OrganizationDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationDatatableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
