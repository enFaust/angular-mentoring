import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from '@ngrx/store';
import { Router } from "@angular/router";
import { ECoursesActions, GetCoursesSuccess } from "../actions/courses";
import { map, switchMap, mergeMap } from "rxjs/operators";
import { CourseService } from "../../service/course/course.service";

 
import { Observable } from 'rxjs';


@Injectable()
export class CoursesEffects {

  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    public router: Router
  ) {
  }

  @Effect()
  getAll$: Observable<any> = this.actions$
    .pipe(
      ofType(ECoursesActions.GET_COURSES),
      mergeMap(() => this.courseService.getCourses()
        .pipe(
          map(data => new GetCoursesSuccess(data)),
          // catchError(() => new GetCoursesFail())
        )

      )
    )

}
