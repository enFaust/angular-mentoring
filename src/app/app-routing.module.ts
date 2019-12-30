import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WrapperPage} from './shared/components/wrapper-page/wrapper.page';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';


const routes: Routes = [
  {path: 'course', component: WrapperPage},
  {path: '**', component: NotFoundComponent, data: {title: '404'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
