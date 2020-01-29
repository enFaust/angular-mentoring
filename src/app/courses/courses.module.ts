import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {CoursesComponent} from './components/courses/courses.component';
import {CourseComponent} from './components/course/course.component';
import {CoursesSearchComponent} from './components/courses-search/courses-search.component';
import {AppRoutingModule} from '../app-routing.module';
import {LoadMoreComponent} from "../shared/components/load-more/load-more.component";
import {DurationConverterPipe} from "../shared/pipes/duration/duration-converter.pipe";
import {OrderByPipe} from "../shared/pipes/order-by/order-by.pipe";
import {FormsModule} from "@angular/forms";
import { AddCoursePage } from './components/add-course/add-course-page';


@NgModule({
  declarations: [CoursesComponent, CourseComponent, CoursesSearchComponent, LoadMoreComponent, DurationConverterPipe, OrderByPipe, AddCoursePage],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CoursesModule {
}
