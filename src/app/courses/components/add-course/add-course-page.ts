import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../service/course/course.service";
import {CommonCourse} from "../../model/course/impl/common-course";
import { FormsModule }   from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course-page.html',
  styleUrls: ['./add-course-page.css']
})
export class AddCoursePage implements OnInit {

  private title: string;
  private description: string;
  private date: string;
  private duration: number = 0;

  constructor(private coursesService: CourseService, public router: Router) {
  }

  ngOnInit() {
  }

  public save() {
    let course = new CommonCourse(0, this.title, new Date(this.date), this.duration, this.description, false);
    this.coursesService.createCourse(course);
    this.router.navigate(['']);
  }

}
