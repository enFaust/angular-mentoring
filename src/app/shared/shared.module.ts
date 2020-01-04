import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {LogoComponent} from './components/logo/logo.component';
import {UserMenuComponent} from './components/user-menu/user-menu.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {LoadMoreComponent} from './components/load-more/load-more.component';
import {CopyrightComponent} from './components/copyright/copyright.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {WrapperPageComponent} from './components/wrapper-page/wrapper-page.component';
import {CoursesModule} from "../courses/courses.module";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    UserMenuComponent,
    BreadcrumbsComponent,
    LoadMoreComponent,
    CopyrightComponent,
    NotFoundComponent,
    WrapperPageComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    LoadMoreComponent
  ],
  imports: [
    CommonModule,
    CoursesModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class SharedModule {
}
