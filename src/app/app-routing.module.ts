import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './shared/pages/not-found/not-found.component';
import {CoursesComponent} from './courses/pages/courses/courses.component';
import {LoginPage} from "./shared/pages/login-page/login.page";
import {AddCoursePage} from "./courses/pages/add-course/add-course-page";
import {CoursePageComponent} from "./courses/pages/course-page/course-page.component";
import {AuthGuard} from "./auth.guard";


const routes: Routes = [

  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses/add',
    component: AddCoursePage
  },
  {
    path: 'courses/edit/:id',
    component: CoursePageComponent
  },
  {
    path: 'courses/edit/**',
    component: NotFoundComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppRoutingModule {
}
