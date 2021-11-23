import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssignmentFormComponent } from './update-assignment-form.component';

describe('UpdateAssignmentFormComponent', () => {
  let component: UpdateAssignmentFormComponent;
  let fixture: ComponentFixture<UpdateAssignmentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAssignmentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAssignmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
