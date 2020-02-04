import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {WrapperPage} from "./shared/pages/wrapper-page/wrapper.page";
import {HeaderComponent} from "./shared/components/header/header.component";
import {BreadcrumbsComponent} from "./shared/components/breadcrumbs/breadcrumbs.component";
import {FooterComponent} from "./shared/components/footer/footer.component";
import {LogoComponent} from "./shared/components/logo/logo.component";
import {UserMenuComponent} from "./shared/components/user-menu/user-menu.component";
import {CopyrightComponent} from "./shared/components/copyright/copyright.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        WrapperPage,
        HeaderComponent,
        BreadcrumbsComponent,
        FooterComponent,
        LogoComponent,
        UserMenuComponent,
        CopyrightComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Video Course'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Video Course');
  });
});
