import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {CoursesComponent} from './courses/components/courses/courses.component';
import {LoginPage} from "./shared/components/login-page/login.page";
import {AddCoursePage} from "./courses/components/add-course/add-course-page";
import {CoursePageComponent} from "./courses/components/course-page/course-page.component";
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
    path: 'courses/:id',
    component: CoursePageComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {title: '404'}
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
