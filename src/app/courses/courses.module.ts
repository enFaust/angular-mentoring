import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperPage } from '../shared/components/wrapper-page/wrapper.page';
import {SharedModule} from "../shared/shared.module";
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';



@NgModule({
  declarations: [WrapperPage, CoursesComponent, CourseComponent],
  exports: [
    CourseComponent,
    WrapperPage
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoursesModule { }
