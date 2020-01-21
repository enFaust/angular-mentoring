import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../service/course/course.service';
import {Course} from '../../model/course/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses: Course[];
  public allCourses: Course[];

  constructor(private coursesService: CourseService) {
  }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
    this.allCourses = this.courses;
  }

  public onDelete(id: number): void {
    if (confirm('Do you really want to delete this course?')){
      this.coursesService.removeCourse(id);
    }
  }

  public search(searchWord: string): void {
    this.courses = this.allCourses
      .filter((item: Course) => item.title.toString().toUpperCase().includes(searchWord))
      .sort( (v1, v2) => this.orderByTitleComparator(v1,v2));
  }

  private orderByTitleComparator(v1: Course, v2: Course) {
    if (v1.title === v2.title) {
      return 0;
    }
    if (v1.title > v2.title) {
      return 1;
    }
    return -1;
  }

}
