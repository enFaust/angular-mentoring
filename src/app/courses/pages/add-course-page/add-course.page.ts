import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../service/course/course.service";
import {CommonCourse} from "../../model/course/impl/common-course";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {SpinnerService} from "../../../shared/service/spinner/spinner.service";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.css']
})
export class AddCoursePage implements OnInit {

  public static TITLE: string = "Add new course";
  showErrorBlock = false;
  duration;

  addCourseForm: FormGroup = new FormGroup({
    "title": new FormControl('', [Validators.required, Validators.maxLength(50)]),
    "description": new FormControl('', [Validators.required, Validators.maxLength(500)]),
    "date": new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])')]),
    "duration": new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
  });

  constructor(private coursesService: CourseService, private router: Router, private titleService: Title, private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    this.formChanges();
    this.titleService.setTitle(AddCoursePage.TITLE);
  }

  formChanges() {
    this.addCourseForm.valueChanges.subscribe(formValue => {
      this.showErrorBlock = false;
      this.duration = formValue['duration'];
    });
  }

  public save() {
    if (this.addCourseForm.valid) {
      this.spinnerService.turnOn();
      let title = this.addCourseForm.controls['title'].value;
      let description = this.addCourseForm.controls['description'].value;
      let date = this.addCourseForm.controls['date'].value;
      let duration = this.addCourseForm.controls['duration'].value;

      this.coursesService.createCourse(new CommonCourse(0, title, new Date(date), duration, description, false)).subscribe(observable =>
      {
        this.spinnerService.turnOff();
      });
      this.router.navigate(['/courses']);
    } else {
      this.showErrorBlock = true;
      this.spinnerService.turnOff();
    }
  }

}
