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
    data: {
      breadcrumb: 'Login',
      title: 'Login'
    },
  },
  {
    path: 'courses',
    component: CoursesComponent,
/*    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],*/
    data: {
      breadcrumb: 'Courses',
      title: 'Courses'
    },
    children: [
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
        component: CoursePageComponent,
        data: {
          breadcrumb: 'Edit',
          title: 'Edit Course'
        }
      },
    ]
  },
 /* {
    path: 'courses/add',
    component: AddCoursePage,
    data: {
      breadcrumb: 'Add',
      title: 'Add course'
    },
  },
  {
    path: 'courses/:id',
    component: CoursePageComponent,
    data: {
      breadcrumb: 'Edit',
      title: 'Edit Course'
    }
  },*/
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
