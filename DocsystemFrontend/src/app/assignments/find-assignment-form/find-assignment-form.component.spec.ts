import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAssignmentFormComponent } from './find-assignment-form.component';

describe('FindAssignmentFormComponent', () => {
  let component: FindAssignmentFormComponent;
  let fixture: ComponentFixture<FindAssignmentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAssignmentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAssignmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
