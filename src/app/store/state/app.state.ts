import {initialToken, IToken} from "../../shared/store/states/auth";
import {ICourseState, initialCourseState} from "../../courses/store/states/courses/courses";
import {ICurrentUserState, initialCurrentUserState} from "../../shared/store/states/user";

export interface AppState {
  token: IToken,
  currentUser: ICurrentUserState,
  courses: ICourseState
}

export const initialAppState: AppState = {
  token: initialToken,
  currentUser: initialCurrentUserState,
  courses: initialCourseState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
