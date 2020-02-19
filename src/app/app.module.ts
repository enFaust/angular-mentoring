import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoursesModule} from './courses/courses.module';
import {SharedModule} from './shared/shared.module';
import {AuthGuard} from "./auth.guard";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./shared/store/effects/auth";
import {courseReducer} from "./courses/store/reducers/courses";
import { CoursesEffects } from './courses/store/effects/courses';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    SharedModule,
    EffectsModule.forRoot([AuthEffects, CoursesEffects]),
    StoreModule.forRoot({courses: courseReducer}),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
