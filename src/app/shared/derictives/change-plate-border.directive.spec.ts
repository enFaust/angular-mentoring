import { ChangePlateBorderDirective } from './change-plate-border.directive';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CourseComponent} from "../../courses/components/course/course.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {CommonCourse} from "../../courses/model/course/impl/common-course";
import {By} from "@angular/platform-browser";

describe('ChangePlateBorderDirective', () => {

  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ CourseComponent, ChangePlateBorderDirective],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
      .createComponent(CourseComponent);

    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;

    component.course = new CommonCourse(1, 'Video Course 1. Name tag', new Date(), 120,
      'Learn about where you can find course descriptions, what information they include, how they work, ' +
      'and details about various components of a course description. Course descriptions report information about a ' +
      'university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and' +
      ' in course schedules that contain descriptions for all courses offered during a particular semester.', true);

    fixture.detectChanges();
  });

});
