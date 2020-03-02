import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePage } from './course.page';

describe('CoursePageComponent', () => {
  let component: CoursePage;
  let fixture: ComponentFixture<CoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
