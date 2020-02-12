import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../service/course/course.service";
import {Course} from "../../model/course/course";
import {DatePipe} from "@angular/common";
import {CommonCourse} from "../../model/course/impl/common-course";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {


  id: number;
  course: Course;
  date: string;
  showErrorBlock = false;
  editCourseForm: FormGroup;

  constructor(private router: ActivatedRoute, private coursesService: CourseService, private datePipe: DatePipe, private route: Router,  private titleService: Title) {

  }

  ngOnInit() {

    this.router.params.subscribe((routeParams) => {
      this.id = routeParams.id;
      this.course = this.coursesService.getCourseById(this.id);
    });

    this.date = this.datePipe.transform(this.course.date, "yyyy-MM-dd");

    this.titleService.setTitle(this.course.name);

    this.editCourseForm = new FormGroup({
      "title": new FormControl(this.course.name, [Validators.required, Validators.maxLength(40)]),
      "description": new FormControl(this.course.description, [Validators.required, Validators.maxLength(3000)]),
      "date": new FormControl(this.date, [
        Validators.required,
        Validators.pattern('[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])')
      ]),
      "duration": new FormControl(this.course.length, [Validators.required, Validators.pattern('[0-9]*')]),
    });


  }


  public edit() {
      if (this.editCourseForm.valid) {
        let title = this.editCourseForm.controls['name'].value;
        let date = this.editCourseForm.controls['date'].value;
        let duration = this.editCourseForm.controls['length'].value;
        let description = this.editCourseForm.controls['description'].value;

        this.coursesService.updateCourse(new CommonCourse(this.id, title, date, duration, description, false));
        this.route.navigate(['/courses']);
      }else {
        this.showErrorBlock = true;
      }
  }

}
