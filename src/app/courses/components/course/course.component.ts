import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../model/course/course';
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(private router: Router, private route: ActivatedRoute) { }

  public onDelete() {
    this.delete.emit(this.course.id);
  }

  public goToCourse(){
    this.router.navigate(["/courses/edit", this.course.id], {
      relativeTo: this.route,
    });
  }

}
