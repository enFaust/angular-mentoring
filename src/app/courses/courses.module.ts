import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WrapperPage} from '../shared/components/wrapper-page/wrapper.page';
import {SharedModule} from '../shared/shared.module';
import {CoursesComponent} from './components/courses/courses.component';
import {CourseComponent} from './components/course/course.component';
import {CoursesSearchComponent} from './components/courses-search/courses-search.component';
import {AppRoutingModule} from '../app-routing.module';
import {LoadMoreComponent} from "../shared/components/load-more/load-more.component";


@NgModule({
  declarations: [CoursesComponent, CourseComponent, CoursesSearchComponent, LoadMoreComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class CoursesModule {
}
