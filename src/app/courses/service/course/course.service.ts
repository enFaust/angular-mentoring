import {Injectable} from '@angular/core';
import {Course} from "../../model/course/course";
import {CommonCourse} from "../../model/course/impl/common-course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courses: Course[] = [
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
  ];


  constructor() {
  }

  public createCourse(course: Course) {
    this.courses.push(course);
  }

  public getCourses(): Course[] {
    return this.courses;
  }

  public getCourseById(id: number): Course {
    return this.courses.find(item => item.id == id);
  }

  public removeCourse(id: number) {
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].id == id) {
        this.courses.splice(i, 1);
      }
    }
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
}
