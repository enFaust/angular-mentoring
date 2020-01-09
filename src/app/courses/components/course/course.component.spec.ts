import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseComponent} from './course.component';
import {By} from "@angular/platform-browser";

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input course not null', () => {

    const app = fixture.debugElement.componentInstance;
    console.log(app.course)
    expect(app).toBeTruthy();
   //  expect(component.course).not.toBeNull();

  });

  /*it('course title expect', () => {
    fixture.detectChanges();
    const cardTitle = fixture.debugElement.query(By.css('#title')).nativeElement;
    console.log(cardTitle);
    console.log(component.course.title);
    // expect(cardTitle.textContent).toContain(component.course.title);

    expect(component).toBeTruthy();
  });*/

  /* it('delete course', () => {
     const deleteElement = fixture.debugElement.query(By.css('.delete'));
     deleteElement.triggerEventHandler('click', null);
     const spy = spyOn(component, 'delete');
     expect(spy).toHaveBeenCalled();
   });*/
});
