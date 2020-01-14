import {Pipe, PipeTransform} from '@angular/core';
import {Course} from "../../../courses/model/course/course";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: Course[], orderBy: string): any {



        return courses.sort((v1, v2) => this.orderByDateComparator(v1, v2));



  }

  private orderByDateComparator(v1: Course, v2: Course) {
    if (v1.creationDate === v2.creationDate) {
      return 0;
    }
    if (v1.creationDate > v2.creationDate) {
      return 1;
    }
    return -1;
  }

}
