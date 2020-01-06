import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WrapperPage} from './shared/components/wrapper-page/wrapper.page';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {CoursesComponent} from './courses/components/courses/courses.component';


const routes: Routes = [
  {path: '', component: CoursesComponent},
  {path: '**', component: NotFoundComponent, data: {title: '404'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
