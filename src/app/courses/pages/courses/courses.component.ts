import {Component, OnChanges, OnInit, SimpleChanges, OnDestroy} from '@angular/core';
import {CourseService} from '../../service/course/course.service';
import {Course} from '../../model/course/course';
import {Title} from "@angular/platform-browser";
import {interval, observable, Observable, Subject, Subscription} from "rxjs";
import {debounce, debounceTime} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/state/app.state";
import {ICourseState} from "../../store/states/courses/courses";
import {ECoursesActions, GetCourses} from "../../store/actions/courses";
import { getCourses } from '../../store/reducers/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {

  public static TITLE: string = "Add new course";

  // private coursesSubject: Subject<Course[]> = new Subject<Course[]>();
  // private coursesObservable: Observable<Course[]> = this.coursesSubject.asObservable()
  // courses$: Observable<Course[]> = this.store.select(state => state.courses);

  courses: Course[] = [];
  courses$: Subscription;
  routerChanged = false;

  constructor(private coursesService: CourseService, private titleService: Title, private store: Store<ICourseState>) {
  }

  ngOnInit(): void {
    this.routerChanged = true;
    this.titleService.setTitle(CoursesComponent.TITLE);

    this.store.dispatch(new GetCourses());


    this.courses$ = this.store.select(getCourses).subscribe(data => {
      this.courses = data.courses;
    });
  }

  public onDelete(id: number): void {
    this.routerChanged = true;
    if (confirm('Do you really want to delete this course?')) {
      this.coursesService.removeCourse(id).subscribe(observable => this.routerChanged = false
      );
    }
  }

  public loadMore() {
    this.routerChanged = true;
    this.coursesService.loadMore()
      .subscribe(courses => {
        // this.coursesSubject.next(courses);
        this.routerChanged = false;
      });
  }

  public search(textSearch: string): void {
    this.routerChanged = true;
    this.coursesService.searchCourses(textSearch)
      .subscribe(
        courses => {
          // this.coursesSubject.next(courses);
          this.routerChanged = false;
        });
  }

  ngOnDestroy() {
    if (this.courses$) {
      this.courses$.unsubscribe();
    }
  }

  // public updatePage() {
  //   this.store.dispatch(new GetCourses());
  // }

}
