import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReportsComponent } from './manage-reports.component';

describe('ManageReportsComponent', () => {
  let component: ManageReportsComponent;
  let fixture: ComponentFixture<ManageReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageReportsComponent]
    });
    fixture = TestBed.createComponent(ManageReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
