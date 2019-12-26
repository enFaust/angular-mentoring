import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../service/course.service";
import {Course} from "../../model/entity/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses: Course[];

  constructor(private coursesService: CourseService) {
  }

  ngOnInit() {
    this.courses = this.coursesService.getCourses()
  }

}
