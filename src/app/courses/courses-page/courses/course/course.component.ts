import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../../model/entity/course";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input()
  public course: Course;

  constructor() { }

  ngOnInit() {
  }

}
