import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursePageComponent} from "./course-page.component";


const routes: Routes = [
  {
    path: ":id",
    component: CoursePageComponent,
    data: {
      title: "Course Page"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursePageRoutingModule { }
