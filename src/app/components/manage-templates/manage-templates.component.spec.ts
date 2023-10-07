import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTemplatesComponent } from './manage-templates.component';

describe('ManageTemplatesComponent', () => {
  let component: ManageTemplatesComponent;
  let fixture: ComponentFixture<ManageTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTemplatesComponent]
    });
    fixture = TestBed.createComponent(ManageTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
