import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {CoursesPage} from './pages/courses/courses.page';
import {CourseComponent} from './components/course/course.component';
import {CoursesSearchComponent} from './components/courses-search/courses-search.component';
import {AppRoutingModule} from '../app-routing.module';
import {DurationConverterPipe} from "../shared/pipes/duration/duration-converter.pipe";
import {OrderByPipe} from "../shared/pipes/order-by/order-by.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddCoursePage} from './pages/add-course-page/add-course.page';
import {CoursePage} from './pages/edit-course-page/course.page';
import {AuthorsComponent} from "./components/authors/authors.component";


@NgModule({
  declarations: [CoursesPage, CourseComponent, CoursesSearchComponent, DurationConverterPipe, AuthorsComponent, OrderByPipe, AddCoursePage, CoursePage],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe]
})
export class CoursesModule {
}
