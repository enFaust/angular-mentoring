import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {
  ECoursesActions,
  GetCourses,
  GetCoursesSuccess,
  LoadMoreCourse,
  RemoveCourse,
  SearchCourses, SearchCoursesSuccess
} from "../actions/courses";
import {map, mergeMap, switchMap} from "rxjs/operators";
import {CourseService} from "../../service/course/course.service";
import {Observable} from 'rxjs';


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
        )
      ));

  @Effect()
  removeCourse$: Observable<any> = this.actions$
    .pipe(
      ofType<RemoveCourse>(ECoursesActions.REMOVE_COURSE),
      switchMap(action =>
        this.courseService.removeCourse(action.payload)
          .pipe(
            map(() => {
              return new GetCourses();
            })
          )
      )
    );

  @Effect()
  loadMore$: Observable<any> = this.actions$
    .pipe(
      ofType<LoadMoreCourse>(ECoursesActions.LOAD_MORE_COURSE),
      mergeMap(() =>
        this.courseService.loadMore().pipe(
          map(data => new GetCoursesSuccess(data))
        )
      )
    );

  @Effect()
  search$: Observable<any> = this.actions$
    .pipe(
      ofType<SearchCourses>(ECoursesActions.SEARCH_COURSES),
      switchMap(action =>
        this.courseService.searchCourses(action.payload).pipe(
          map(data => {
            return new SearchCoursesSuccess(data)
          })
        )
      )
    );
}
