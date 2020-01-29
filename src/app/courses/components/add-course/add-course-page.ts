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

  myForm: FormGroup = new FormGroup({
    "title": new FormControl("", Validators.required),
    "description": new FormControl("", Validators.required),
    "date": new FormControl('', Validators.required),
    "duration": new FormControl("", [
      Validators.required
    ]),
  });


  constructor(private coursesService: CourseService, public router: Router) {
  }

  ngOnInit() {
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
      console.log(this.myForm.controls['title'].valid);
    }
  }

}
