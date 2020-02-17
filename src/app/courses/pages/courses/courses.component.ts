import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CourseService} from '../../service/course/course.service';
import {Course} from '../../model/course/course';
import {Title} from "@angular/platform-browser";
import {interval, observable, Observable, Subject} from "rxjs";
import {debounce, debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public static TITLE: string = "Add new course";

  private coursesSubject: Subject<Course[]> = new Subject<Course[]>();
  private coursesObservable: Observable<Course[]> = this.coursesSubject.asObservable()

  courses: Course[];
  routerChanged = false;

  constructor(private coursesService: CourseService, private titleService: Title) {
    this.routerChanged = true;
    titleService.setTitle(CoursesComponent.TITLE);
    this.updatePage();
  }

  ngOnInit(): void {
    this.coursesObservable.subscribe(
      observable => {
        this.courses = observable;
      }
    );
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
        this.coursesSubject.next(courses);
        this.routerChanged = false;
      });
  }

  public search(textSearch: string): void {
    this.routerChanged = true;
    this.coursesService.searchCourses(textSearch)
      .subscribe(
        courses => {
          this.coursesSubject.next(courses);
          this.routerChanged = false;
        });
  }

  public updatePage() {
    this.coursesService.getCourses().subscribe(courses => {
      this.coursesSubject.next(courses);
      this.routerChanged = false;
    });
  }

}
