import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {CoursesComponent} from './pages/courses/courses.component';
import {CourseComponent} from './components/course/course.component';
import {CoursesSearchComponent} from './components/courses-search/courses-search.component';
import {AppRoutingModule} from '../app-routing.module';
import {DurationConverterPipe} from "../shared/pipes/duration/duration-converter.pipe";
import {OrderByPipe} from "../shared/pipes/order-by/order-by.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddCoursePage } from './pages/add-course/add-course-page';
import { CoursePageComponent } from './pages/course-page/course-page.component';


@NgModule({
  declarations: [CoursesComponent, CourseComponent, CoursesSearchComponent, DurationConverterPipe, OrderByPipe, AddCoursePage, CoursePageComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe]
})
export class CoursesModule {
}
