import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from '../../service/course/course.service';
import {Course} from '../../model/course/course';
import {Title} from "@angular/platform-browser";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {ICourseState} from "../../store/states/courses/courses";
import {SearchCourses, LoadMoreCourse, RemoveCourse, GetCourses} from "../../store/actions/courses";
import {getCourses} from "../../store/reducers/courses";
import {SpinnerService} from "../../../shared/service/spinner/spinner.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.css']
})
export class CoursesPage implements OnInit, OnDestroy {

  public static TITLE: string = "Add new course";

  courses: Course[] = [];
  courses$: Subscription;

  constructor(private coursesService: CourseService, private titleService: Title, private store: Store<ICourseState>, private spinnerService: SpinnerService) {
  }

  ngOnInit(): void {
    this.spinnerService.turnOn();
    this.titleService.setTitle(CoursesPage.TITLE);


    this.store.dispatch(new GetCourses());

    this.courses$ = this.store.select(getCourses).subscribe(data => {
      this.courses = data;
      this.spinnerService.turnOff();
    });
  }

  public onDelete(id: number): void {
    this.spinnerService.turnOn();
    if (confirm('Do you really want to delete this course?')) {
      this.store.dispatch(new RemoveCourse(id));

      this.courses$ = this.store.select(getCourses).subscribe(data => {
        this.courses = data;
        this.spinnerService.turnOff();
      });
    }
  }

  public loadMore() {
    this.spinnerService.turnOn();
    this.store.dispatch(new LoadMoreCourse());

    this.courses$ = this.store.select(getCourses).subscribe(data => {
      this.courses = data;
      this.spinnerService.turnOff();
    });
  }

  public search(textSearch: string): void {
    this.spinnerService.turnOn();
    this.store.dispatch(new SearchCourses(textSearch));

    this.courses$ = this.store.select(getCourses).subscribe(data => {
      this.courses = data;
      this.spinnerService.turnOff();
    });
  }

  ngOnDestroy() {
    if (this.courses$) {
      this.courses$.unsubscribe();
    }
  }

}
