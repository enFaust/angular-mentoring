import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from "../../model/course/course";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input()
  public course: Course;

  @Output()
  private onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public delete() {
    this.onDelete.emit(this.course.id);
}

}
