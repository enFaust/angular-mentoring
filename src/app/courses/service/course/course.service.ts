import {Injectable, OnDestroy} from '@angular/core';
import {Course} from "../../model/course/course";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService implements OnDestroy {

  start: number = 0;
  count: number = 0;
  textFragment: string = "";
  courses: Course[] = [];

  private readonly HOST = 'http://localhost:3004';
  private readonly DEFAULT_COUNT = 5;

  constructor(private httpClient: HttpClient) {
    this.count = this.DEFAULT_COUNT;
  }

  public createCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(this.HOST + '/courses', course);
  }


  public getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.HOST + "/courses?start=" + this.start + "&count=" + this.count)
  }

  public searchCourses(textFragment: string): Observable<Course[]> {
    this.textFragment = textFragment;
    return this.httpClient.get<Course[]>(this.HOST +
      "/courses?start=" + this.start +
      "&count=" + this.count +
      "&textFragment=" + textFragment);
  }

  public getCourseById(id: number):  Observable<Course> {
    return this.httpClient.get<Course>(this.HOST + "/courses/" + id);
  }

  public removeCourse(id: number): Observable<{}> {
    return this.httpClient.delete(this.HOST + '/courses/' + id);
  }

  public loadMore(): Observable<Course[]> {
    this.count += this.DEFAULT_COUNT;
    return this.httpClient.get<Course[]>(this.HOST +
      "/courses?start=" + this.start +
      "&count=" + this.count +
      "&textFragment=" + this.textFragment);
  }

  public updateCourse(course: Course): boolean {
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].id == course.id) {
        this.courses[i] = course;
        return true;
      }
    }
    return false;
  }

  ngOnDestroy(): void {
    this.count = 0;
  }
}
