import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from '../../service/course/course.service';
import {Course} from '../../model/course/course';
import {Title} from "@angular/platform-browser";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {ICourseState} from "../../store/states/courses/courses";
import {SearchCourses, LoadMoreCourse, RemoveCourse, GetCourses} from "../../store/actions/courses";
import {getCourses} from "../../store/reducers/courses";

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
      this.courses = data;
      this.routerChanged = false;
    });
  }

  public onDelete(id: number): void {
    this.routerChanged = true;
    if (confirm('Do you really want to delete this course?')) {
      this.store.dispatch(new RemoveCourse(id));

      this.courses$ = this.store.select(getCourses).subscribe(data => {
        this.courses = data;
        this.routerChanged = false;
      });
    }
  }

  public loadMore() {
    this.routerChanged = true;
    this.store.dispatch(new LoadMoreCourse());

    this.courses$ = this.store.select(getCourses).subscribe(data => {
      this.courses = data;
      this.routerChanged = false;
    });
  }

  public search(textSearch: string): void {
    this.routerChanged = true;
    console.log("Search")
    this.store.dispatch(new SearchCourses(textSearch));

    this.courses$ = this.store.select(getCourses).subscribe(data => {
      this.courses = data;
      this.routerChanged = false;
    });
  }

  ngOnDestroy() {
    if (this.courses$) {
      this.courses$.unsubscribe();
    }
  }

}
