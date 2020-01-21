import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseComponent} from './course.component';
import {By} from "@angular/platform-browser";
import {CommonCourse} from "../../model/course/impl/common-course";
import {DurationConverterPipe} from "../../../shared/pipes/duration/duration-converter.pipe";
import {ChangePlateBorderDirective} from "../../../shared/derictives/change-plate-border.directive";

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent, DurationConverterPipe, ChangePlateBorderDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;

    component.course = new CommonCourse(1, 'Video Course 1. Name tag', new Date(2020, 0, 15), 120,
      'Learn about where you can find course descriptions, what information they include, how they work, ' +
      'and details about various components of a course description. Course descriptions report information about a ' +
      'university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and' +
      ' in course schedules that contain descriptions for all courses offered during a particular semester.', true);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click delete button expected', () => {
    let deleteButton;
    component.delete.subscribe(d => {
      deleteButton = d;
    });
    component.onDelete();
    expect(deleteButton).toBe(component.course.id);
  });

  it('course id expect', () => {
    const cartTitle = fixture.debugElement.query(By.css('.id')).nativeElement;
    expect(cartTitle.textContent).toContain('1');
  });

  it('course title expect', () => {
    const cartTitle = fixture.debugElement.query(By.css('.card-title')).nativeElement;
    expect(cartTitle.textContent).toContain('VIDEO COURSE 1. NAME TAG');
  });

  it('course creation date expect', () => {
    const cartTitle = fixture.debugElement.query(By.css('.creation-date')).nativeElement;
    expect(cartTitle.textContent).toContain('15 Jan 2020');
  });

  it('course duration expect', () => {
    const cartTitle = fixture.debugElement.query(By.css('.duration')).nativeElement;
    expect(cartTitle.textContent).toContain('2h');
  });

  it('course description expect', () => {
    const cartTitle = fixture.debugElement.query(By.css('.description')).nativeElement;
    expect(cartTitle.textContent).toContain('Learn about where you can find course descriptions, what information they include, how they work, ' +
      'and details about various components of a course description. Course descriptions report information about a ' +
      'university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and' +
      ' in course schedules that contain descriptions for all courses offered during a particular semester.');
  });

});
