import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import {SharedModule} from "../shared/shared.module";
import { CoursesComponent } from './courses-page/courses/courses.component';
import { CourseComponent } from './courses-page/courses/course/course.component';



@NgModule({
  declarations: [CoursesPageComponent, CoursesComponent, CourseComponent],
  exports: [
    CourseComponent,
    CoursesPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoursesModule { }
