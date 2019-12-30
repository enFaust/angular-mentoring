import {Component, OnChanges, OnInit, Output} from '@angular/core';
import {CourseService} from "../../service/course/course.service";
import {Course} from "../../model/course/course";
import {CommonCourse} from "../../model/course/impl/common-course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  public courses: Course[];
  private newCourse: Course = {
    id: 0,
    title: '',
    creationDate: '',
    duration: '',
    description: '',
  };


  constructor(private coursesService: CourseService) {
  }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  public onDelete(id: number): void {
    console.log('Drop course with id: ' + id );
    this.courses = this.courses.filter((item: Course) => item.id !== id);
  }
}
