import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './shared/pages/not-found/not-found.component';
import {CoursesPage} from './courses/pages/courses/courses.page';
import {LoginPage} from "./shared/pages/login-page/login.page";
import {AddCoursePage} from "./courses/pages/add-course-page/add-course.page";
import {CoursePage} from "./courses/pages/edit-course-page/course.page";
import {AuthGuard} from "./auth.guard";


const routes: Routes = [

  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {
    path: 'login',
    component: LoginPage,
    data: {
      breadcrumb: 'Login',
      title: 'Login'
    },
  },
  {
    canActivateChild: [AuthGuard],
    path: 'courses',
    data: {
      breadcrumb: 'Courses',
      title: 'Courses'
    },
    children: [
      {
        path: '',
        component: CoursesPage,
        data: {
          breadcrumb: 'All Courses',
          title: 'Courses'
        },
      },
      {
        path: 'add',
        component: AddCoursePage,
        data: {
          breadcrumb: 'Add',
          title: 'Add course'
        },
      },
      {
        path: ':id',
        component: CoursePage,
        data: {
          breadcrumb: 'Edit',
          title: 'Edit Course'
        }
      },
    ]
  },
  {
    path: 'courses/**',
    component: NotFoundComponent,
    data: {
      title: 'Page not found'
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: 'Page not found'
    }
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
