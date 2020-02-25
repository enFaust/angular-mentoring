import {Action} from '@ngrx/store';
import {Course} from "../../model/course/course";

export const enum ECoursesActions {
  ADD_COURSE = '[Course component] Add Course',
  ADD_COURSE_SUCCESS = '[Course component] Add Course sSuccess',
  GET_COURSES = '[Course component] Get Courses',
  GET_COURSES_SUCCESS = '[Course component] Get Courses Success',
  REMOVE_COURSE = '[Course component] Remove Course',
  REMOVE_COURSE_SUCCESS = '[Course component] Remove Course Success',
  LOAD_MORE_COURSE = '[Course component] Load More Courses',
  LOAD_MORE_COURSE_SUCCESS = '[Course component] Load More Courses Success',
  SEARCH_COURSES = '[Course component] Search Courses',
  SEARCH_COURSES_SUCCESS = '[Course component] Search Courses Success',
}

/**
 * Get Course CourseActions
 */

export class GetCourses implements Action {
  readonly type = ECoursesActions.GET_COURSES;

  constructor(public payload?: any) {
  }
}

export class GetCoursesSuccess implements Action {
  readonly type = ECoursesActions.GET_COURSES_SUCCESS;

  constructor(public payload: Course[]) {
  }
}

export class SearchCourses implements Action {
  readonly type = ECoursesActions.SEARCH_COURSES;

  constructor(public payload?: any) {
  }
}

export class SearchCoursesSuccess implements Action {
  readonly type = ECoursesActions.SEARCH_COURSES_SUCCESS;

  constructor(public payload: Course[]) {
  }
}

/**
 * Add Course CourseActions
 */

export class AddCourse implements Action {
  readonly type = ECoursesActions.ADD_COURSE;

  constructor(public payload: Course) {
  }
}

export class AddCourseSuccess implements Action {
  readonly type = ECoursesActions.ADD_COURSE_SUCCESS;

  constructor(public payload: Course) {
  }
}

/**
 * Remove Course CourseActions
 */

export class RemoveCourse implements Action {
  readonly type = ECoursesActions.REMOVE_COURSE;
  constructor(public payload: number) {
  }
}

export class RemoveCourseSuccess implements Action {
  readonly type = ECoursesActions.REMOVE_COURSE_SUCCESS;
  constructor(public payload: number) {
  }
}

export class LoadMoreCourse implements Action {
  readonly type = ECoursesActions.LOAD_MORE_COURSE;
  constructor(public payload: any = null) {
  }
}

export class LoadMoreCourseSuccess implements Action {
  readonly type = ECoursesActions.LOAD_MORE_COURSE_SUCCESS;
  constructor(public payload?: Course[]) {
  }
}

export type CourseActions =
  | AddCourse
  | AddCourseSuccess
  | RemoveCourse
  | RemoveCourseSuccess
  | SearchCourses
  | SearchCoursesSuccess
  | LoadMoreCourse
  | LoadMoreCourseSuccess
  | GetCourses
  | GetCoursesSuccess
  ;
