import {ICourseState, initialCourseState} from "../states/courses/courses";
import {CourseActions, ECoursesActions} from "../actions/courses";


export function courseReducer(state = initialCourseState, action: CourseActions): ICourseState {
  const {type, payload} = action;

  switch (type) {
    case ECoursesActions.ADD_COURSE:
      break;
    case ECoursesActions.ADD_COURSE_SUCCESS:
      break;
    case ECoursesActions.REMOVE_COURSE:
      break;
    case ECoursesActions.REMOVE_COURSE_SUCCESS:
      break;
    case ECoursesActions.GET_COURSES:
      break;
    case ECoursesActions.GET_COURSES_SUCCESS: {
      return payload
    }
    case ECoursesActions.SEARCH_COURSES:
      break;
    case ECoursesActions.SEARCH_COURSES_SUCCESS: {
      return payload
    }
    case ECoursesActions.LOAD_MORE_COURSE:
      break;
    case ECoursesActions.LOAD_MORE_COURSE_SUCCESS: {
      return payload
    }
    default:
      return state;
  }
}

export const getCourses = (state: ICourseState) => state.courses;
