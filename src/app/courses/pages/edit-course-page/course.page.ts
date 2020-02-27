import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../service/course/course.service";
import {Course} from "../../model/course/course";
import {DatePipe} from "@angular/common";
import {CommonCourse} from "../../model/course/impl/common-course";
import {Title} from '@angular/platform-browser';
import {SpinnerService} from "../../../shared/service/spinner/spinner.service";

@Component({
  selector: 'app-course-page',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.css']
})
export class CoursePage {

  id: number;
  course: Course;
  date: string;
  showErrorBlock = false;
  editCourseForm: FormGroup;
  duration;

  constructor(
    private router: ActivatedRoute,
    private coursesService: CourseService,
    private datePipe: DatePipe,
    private route: Router,
    private titleService: Title,
    private spinnerService: SpinnerService) {

    this.spinnerService.turnOn();
    this.router.params.subscribe((data) => {
      this.coursesService.getCourseById(data['id']).subscribe(data => {
        this.course = data;
        this.id = this.course.id;
        this.date = this.datePipe.transform(this.course.date, "yyyy-MM-dd");
        this.titleService.setTitle(this.course.name);
        this.editCourseForm = new FormGroup({
          "title": new FormControl(this.course.name,
            [Validators.required, Validators.maxLength(50)]),
          "description": new FormControl(this.course.description,
            [Validators.required, Validators.maxLength(500)]),
          "date": new FormControl(this.date, [
            Validators.required,
            Validators.pattern('[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])')]),
          "duration": new FormControl(this.course.length,
            [Validators.required, Validators.pattern('[0-9]*')])
        });
        this.spinnerService.turnOff();
      });
    });
  }

  public edit() {
    if (this.editCourseForm.valid) {
      this.spinnerService.turnOn();
      let title = this.editCourseForm.controls['title'].value;
      let date = this.editCourseForm.controls['date'].value;
      let duration = this.editCourseForm.controls['duration'].value;
      let description = this.editCourseForm.controls['description'].value;
      const course = new CommonCourse(this.id, title, date, duration, description, false);

      this.coursesService.updateCourse(course).subscribe(observable => {
          console.log("ddd")
          this.route.navigate(['/courses']);
          this.spinnerService.turnOff();
        }
      );

    } else {
      this.showErrorBlock = true;
    }
  }
}

