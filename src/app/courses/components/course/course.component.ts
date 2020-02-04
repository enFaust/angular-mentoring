import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../model/course/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent {

  @Input()
  public course: Course;

  @Output()
  public delete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  public onDelete() {
    this.delete.emit(this.course.id);
  }

}
