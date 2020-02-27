import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WrapperPage} from './wrapper.page';
import {BreadcrumbsComponent} from '../../components/breadcrumbs/breadcrumbs.component';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {AppRoutingModule} from "../../../app-routing.module";
import {CoursesPage} from "../../../courses/pages/courses/courses.page";
import {NotFoundComponent} from "../not-found/not-found.component";
import {LogoComponent} from "../../components/logo/logo.component";
import {UserMenuComponent} from "../../components/user-menu/user-menu.component";
import {CopyrightComponent} from "../../components/copyright/copyright.component";
import {CoursesSearchComponent} from "../../../courses/components/courses-search/courses-search.component";
import {CourseComponent} from "../../../courses/components/course/course.component";
import {OrderByPipe} from "../../pipes/order-by/order-by.pipe";
import {DurationConverterPipe} from "../../pipes/duration/duration-converter.pipe";
import {ChangePlateBorderDirective} from "../../derictives/change-plate-border.directive";

describe('WrapperPage', () => {
  let component: WrapperPage;
  let fixture: ComponentFixture<WrapperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [
        WrapperPage,
        BreadcrumbsComponent,
        HeaderComponent,
        FooterComponent,
        CoursesPage,
        NotFoundComponent,
        LogoComponent,
        UserMenuComponent,
        CopyrightComponent,
        CoursesSearchComponent,
        CourseComponent,
        OrderByPipe,
        DurationConverterPipe,
        ChangePlateBorderDirective
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
