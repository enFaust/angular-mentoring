import {Course} from "../../model/course/course";
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

export const courseReducer = (
  state = initialCourseState,
  action: CourseActions
): ICourseState =>
{
  switch (action.type) {
    case ECoursesActions.ADD_COURSE: {

    }
    case ECoursesActions.REMOVE_COURSE: {
      const course = action.payload;
    }
    case ECoursesActions.GET_COURSES: {
      console.log(action)
    }
    default:
      return state;
  }
}

export const getCourses = (state: ICourseState) => state.courses;
