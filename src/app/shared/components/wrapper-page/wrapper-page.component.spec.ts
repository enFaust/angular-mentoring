import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperPageComponent } from './wrapper-page.component';
import {BreadcrumbsComponent} from '../breadcrumbs/breadcrumbs.component';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

describe('CoursesPageComponent', () => {
  let component: WrapperPageComponent;
  let fixture: ComponentFixture<WrapperPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperPageComponent,  BreadcrumbsComponent, HeaderComponent, FooterComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
