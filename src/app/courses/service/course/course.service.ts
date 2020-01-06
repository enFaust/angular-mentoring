import {Injectable} from '@angular/core';
import {Course} from "../../model/course/course";
import {CommonCourse} from "../../model/course/impl/common-course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courses: Course[];

  constructor() {
  }

  public getCourses(): Course[] {
    return this.courses = [
      new CommonCourse(1, "Video Course 1. Name tag", "9 Nov, 2018", "1h 28 min",
        "Learn about where you can find course descriptions, what information they include, how they work, " +
        "and details about various components of a course description. Course descriptions report information about a " +
        "university or college's classes. They're published both in course catalogs that outline degree requirements and" +
        " in course schedules that contain descriptions for all courses offered during a particular semester."),
      new CommonCourse(2, "Video Course 2. Name tag", "9 Nov, 2018", "1h 28 min",
        "Learn about where you can find course descriptions, what information they include, how they work," +
        " and details about various components of a course description. Course descriptions report information about a" +
        " university or college's classes. They're published both in course catalogs that outline degree requirements and" +
        " in course schedules that contain descriptions for all courses offered during a particular semester."),
      new CommonCourse(3, "Video Course 3. Name tag", "9 Nov, 2018", "1h 28 min",
        "Learn about where you can find course descriptions, what information they include, how they work, " +
        "and details about various components of a course description. Course descriptions report information about a" +
        " university or college's classes. They're published both in course catalogs that outline degree requirements" +
        " and in course schedules that contain descriptions for all courses offered during a particular semester."),
      new CommonCourse(4, "Video Course 4. Name tag", "9 Nov, 2018", "1h 28 min",
        "Learn about where you can find course descriptions, what information they include, how they work," +
        " and details about various components of a course description. Course descriptions report information about a" +
        " university or college's classes. They're published both in course catalogs that outline degree requirements " +
        "and in course schedules that contain descriptions for all courses offered during a particular semester."),
    ]
  }
}
