import {
  IAuthState,
  ICurrentUserState,
  initialAuthState,
  initialCurrentUserState
} from "../../shared/store/states/user/auth";
import {ICourseState, initialCourseState} from "../../courses/store/states/courses/courses";

export interface AppState {
  currentUser: ICurrentUserState,
  token: IAuthState,
  courses: ICourseState
}

export const initialAppState: AppState = {
  currentUser: initialCurrentUserState,
  token: initialAuthState,
  courses: initialCourseState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
