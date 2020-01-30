import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../service/course/course.service";
import {CommonCourse} from "../../model/course/impl/common-course";
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course-page.html',
  styleUrls: ['./add-course-page.css']
})
export class AddCoursePage implements OnInit {

  showErrorBlock = false;

  myForm: FormGroup = new FormGroup({
    "title": new FormControl("", [Validators.required, Validators.maxLength(40)]),
    "description": new FormControl("", [Validators.required, Validators.maxLength(300)]),
    "date": new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])')]),
    "duration": new FormControl("", [Validators.required, Validators.pattern('[0-9]*')]),
  });

  constructor(private coursesService: CourseService, public router: Router) {
  }

  ngOnInit() {
    this.formChanges();
  }

  formChanges() {
    this.myForm.valueChanges.subscribe(formValue => {
      this.showErrorBlock = false;
    });
  }

  public save() {
    if (this.myForm.valid) {
      let title = this.myForm.controls['title'].value;
      let date = this.myForm.controls['date'].value;
      let duration = this.myForm.controls['duration'].value;
      let description = this.myForm.controls['description'].value;

      this.coursesService.createCourse(new CommonCourse(0, title, new Date(date), duration, description, false));
      this.router.navigate(['']);
    } else {
      this.showErrorBlock = true;
    }
  }

}
