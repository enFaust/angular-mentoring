import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {CoursesComponent} from './courses/components/courses/courses.component';
import {LoginPage} from "./shared/components/login-page/login.page";
import {AddCoursePage} from "./courses/components/add-course/add-course-page";


const routes: Routes = [
  { path: "", redirectTo: "courses", pathMatch: "full" },
  {path: 'courses', component: CoursesComponent},
  {path: 'login', component: LoginPage},
  {path: 'courses/add', component: AddCoursePage},
  {path: '**', component: NotFoundComponent, data: {title: '404'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppRoutingModule {
}
