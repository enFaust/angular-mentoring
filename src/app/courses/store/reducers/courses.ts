import {ICourseState, initialCourseState} from "../states/courses/courses";
import {CourseActions, ECoursesActions} from "../actions/courses";


export function courseReducer(state = initialCourseState, action: CourseActions): ICourseState {
  const {type, payload} = action;

  switch (type) {
    case ECoursesActions.ADD_COURSE:
      return;
    case ECoursesActions.UPDATE_COURSE:
      return;
    case ECoursesActions.REMOVE_COURSE:
      return;
    case ECoursesActions.GET_COURSES:
      return;
    case ECoursesActions.GET_COURSES_SUCCESS: {
      return payload
    }
    case ECoursesActions.SEARCH_COURSES:
      return;
    case ECoursesActions.SEARCH_COURSES_SUCCESS: {
      return payload
    }
    case ECoursesActions.LOAD_MORE_COURSE:
      return;
    case ECoursesActions.LOAD_MORE_COURSE_SUCCESS: {
      return payload
    }
    default:
      return state;
  }
}

export const getCourses = (state: ICourseState) => state.courses;
