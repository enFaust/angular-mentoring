import {Course} from "../../model/course/course";
import { createSelector } from '@ngrx/store';
import {ICourseState, initialCourseState} from "../states/courses/courses";
import {CourseActions, ECoursesActions} from "../actions/courses";
import {IAuthState, initialAuthState} from "../../../shared/store/states/user/auth";
import {AuthActions, EAuthActions} from "../../../shared/store/actions/auth";
import {Actions} from "@ngrx/effects";


export const authReducers = (
  state = initialAuthState,
  action: AuthActions
): IAuthState => {
  switch (action.type) {
    case EAuthActions.LOGIN_SUCCESS: {
      return {
        token: action.payload
      }
    }
    case EAuthActions.LOGOUT_SUCCESS: {
      return {
        token: null
      }
    }
    default: {
      return state
    }
  }
};

export function courseReducer( state = initialCourseState, action: CourseActions ): ICourseState {
  const { type, payload } = action;

  switch (type) {
    case ECoursesActions.ADD_COURSE: {

    }
    case ECoursesActions.REMOVE_COURSE: {
      const course = action.payload;
    }
    case ECoursesActions.GET_COURSES: {
    }
    case ECoursesActions.GET_COURSES_SUCCESS: {
      console.warn(payload)
      return { 
        ...state, 
        courses: payload
      };
    }
    default:
      return state;
  }
}

export const getCourses = (state: ICourseState) => state.courses;
