import { Injectable } from '@angular/core';
import {Course} from "../model/entity/course";
import {CommonCourse} from "../model/entity/impl/common-course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courses: Course[];

  constructor() {
  }

  public getCourses(): Course[] {
    return this.courses = [
      new CommonCourse(1, "course1", "qwqw", "123", "description1"),
      new CommonCourse(2, "course2", "qwqw", "123", "description2"),
      new CommonCourse(3, "course3", "qwqw", "123", "description3"),
      new CommonCourse(4, "course4", "qwqw", "123", "description4"),
    ]
  }
}
