import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CourseService} from '../../service/course/course.service';
import {Course} from '../../model/course/course';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public static TITLE: string = "Add new course";

  courses: Course[];

  constructor(private coursesService: CourseService, private titleService: Title) {
  }

  ngOnInit(): void {
    this.updatePage();
    this.titleService.setTitle(CoursesComponent.TITLE);
  }

  public onDelete(id: number): void {
    if (confirm('Do you really want to delete this course?')) {
      this.coursesService.removeCourse(id).subscribe();
      this.updatePage();
    }
  }

  public loadMore() {
    this.coursesService.loadMore().subscribe(items => {
      this.courses = items;
    });
  }

  public search(searchWord: string): void {

    this.coursesService.searchCourses(searchWord).subscribe(
      items => {
          this.courses = items;
      });
  }

  public updatePage() {
    this.coursesService.getCourses().subscribe(items => {
      this.courses = items;
    });
  }

  private orderByTitleComparator(v1: Course, v2: Course) {
    if (v1.name === v2.name) {
      return 0;
    }
    if (v1.name > v2.name) {
      return 1;
    }
    return -1;
  }

}
