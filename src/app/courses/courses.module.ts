import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WrapperPageComponent} from '../shared/components/wrapper-page/wrapper-page.component';
import {SharedModule} from '../shared/shared.module';
import {CoursesComponent} from './components/courses/courses.component';
import {CourseComponent} from './components/course/course.component';
import {CoursesSearchComponent} from './components/courses-search/courses-search.component';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
  declarations: [WrapperPageComponent, CoursesComponent, CourseComponent, CoursesSearchComponent],
  exports: [
    CoursesComponent,
    CourseComponent,
    CoursesSearchComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CoursesModule {
}
