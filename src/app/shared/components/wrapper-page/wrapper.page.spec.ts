import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WrapperPage} from './wrapper.page';
import {BreadcrumbsComponent} from '../breadcrumbs/breadcrumbs.component';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {AppRoutingModule} from "../../../app-routing.module";
import {CoursesComponent} from "../../../courses/components/courses/courses.component";
import {NotFoundComponent} from "../not-found/not-found.component";
import {LogoComponent} from "../logo/logo.component";
import {UserMenuComponent} from "../user-menu/user-menu.component";
import {CopyrightComponent} from "../copyright/copyright.component";
import {CoursesSearchComponent} from "../../../courses/components/courses-search/courses-search.component";
import {CourseComponent} from "../../../courses/components/course/course.component";
import {LoadMoreComponent} from "../load-more/load-more.component";

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
        CoursesComponent,
        NotFoundComponent,
        LogoComponent,
        UserMenuComponent,
        CopyrightComponent,
        CoursesSearchComponent,
        CourseComponent,
        LoadMoreComponent
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
