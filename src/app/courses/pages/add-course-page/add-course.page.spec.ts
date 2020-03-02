import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursePage } from './add-course.page';

describe('AddCourseComponent', () => {
  let component: AddCoursePage;
  let fixture: ComponentFixture<AddCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoursePage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
