import {Action} from '@ngrx/store';
import {Course} from "../../model/course/course";

export const enum ECoursesActions {
  ADD_COURSE = '[Course component] Add Course',
  ADD_COURSE_SUCCESS = '[Course component] Add Course sSuccess',
  ADD_COURSE_FAIL = '[Course component] Add Course Fail',
  GET_COURSES = '[Course component] Get Courses',
  GET_COURSES_SUCCESS = '[Course component] Get Courses Success',
  GET_COURSE_SUCCESS = '[Course component] Get Course sSuccess',
  GET_COURSE_FAIL = '[Course component] Get Course Fail',
  REMOVE_COURSE = '[Course component] Remove Course',
  REMOVE_COURSE_SUCCESS = '[Course component] Remove Course Success',
  REMOVE_COURSE_FAIL = '[Course component] Remove Course Fail'
}


/**
 * Get Course CourseActions
 */

export class GetCourses implements Action {
  readonly type = ECoursesActions.GET_COURSES;

  constructor(public payload: any = null) {
  }
}


export class GetCoursesSuccess implements Action {
  readonly type = ECoursesActions.GET_COURSES_SUCCESS;

  constructor(public payload?: Course[]) {}
}

export class GetCourseSuccess implements Action {
  readonly type = ECoursesActions.GET_COURSE_SUCCESS;

  constructor(public payload: Course) {
  }
}

export class GetCourseFail implements Action {
  readonly type = ECoursesActions.GET_COURSE_FAIL;

  constructor(public payload: Course) {
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

export class AddCourseFail implements Action {
  readonly type = ECoursesActions.ADD_COURSE_FAIL;

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

  constructor(public payload: Course[]) {
  }
}

export class RemoveCourseFail implements Action {
  readonly type = ECoursesActions.REMOVE_COURSE_FAIL;

  constructor(public payload: Course) {
  }
}

export type CourseActions =
  | AddCourse
  | AddCourseSuccess
  | AddCourseFail
  | RemoveCourse
  | RemoveCourseSuccess
  | RemoveCourseFail
  | GetCourses
  | GetCoursesSuccess
  | GetCourseSuccess
  | GetCourseFail;
