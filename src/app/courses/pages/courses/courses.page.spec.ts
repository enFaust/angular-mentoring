import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesPage} from './courses.page';
import {CoursesSearchComponent} from '../../components/courses-search/courses-search.component';
import {CourseComponent} from '../../components/course/course.component';
import {OrderByPipe} from "../../../shared/pipes/order-by/order-by.pipe";
import {DurationConverterPipe} from "../../../shared/pipes/duration/duration-converter.pipe";
import {ChangePlateBorderDirective} from "../../../shared/derictives/change-plate-border.directive";

describe('CoursesComponent', () => {
  let component: CoursesPage;
  let fixture: ComponentFixture<CoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesPage,
        CoursesSearchComponent,
        CourseComponent,
        OrderByPipe,
        DurationConverterPipe,
        ChangePlateBorderDirective
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get courses not null', () => {
    expect(component.courses).not.toBeNull();
  });

});
