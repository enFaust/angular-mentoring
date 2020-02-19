import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {ECoursesActions} from "../actions/courses";
import {map, switchMap} from "rxjs/operators";
import {CourseService} from "../../service/course/course.service";


@Injectable()
export class CoursesEffects {

  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    public router: Router
  ) {
  }

  @Effect()
  getAll$ = this.actions$.pipe(
    ofType(ECoursesActions.GET_COURSES),
    map( () => console.log("effect")),
    switchMap(() =>
      this.courseService.getCourses()
    )

  )


}
