import {Injectable, OnDestroy} from '@angular/core';
import {Course} from "../../model/course/course";
import {CommonCourse} from "../../model/course/impl/common-course";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService implements OnDestroy {

  start: number = 0;
  count: number;
  courses: Course[] = [];

  private readonly HOST = 'http://localhost:3004';

  constructor(private httpClient: HttpClient) {
    this.count = 5;
  }

  public createCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(this.HOST + '/courses', course);
  }

  public getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.HOST + "/courses?start=" + this.start + "&count=" + this.count)
  }

  public searchCourses(title: string): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.HOST + "/courses?textFragment="+title);
  }

  public getCourseById(id: number): Course {
    return this.courses.find(item => item.id == id);
  }

  public removeCourse(id: number): Observable<{}> {
    return this.httpClient.delete(this.HOST + '/courses/' + id);
  }

  public loadMore(): Observable<Course[]> {
    this.count += 5;
    return this.httpClient.get<Course[]>(this.HOST + "/courses?start=" + this.start + "&count=" + this.count);
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
  }
}
