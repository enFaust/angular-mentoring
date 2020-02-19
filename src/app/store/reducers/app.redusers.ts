import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {authReducers, getUserReducers} from "../../shared/store/reducers/auth.reducers";
import {courseReducer, getCourses} from "../../courses/store/reducers/courses";


export const appReducers: ActionReducerMap<AppState, any> = {
  currentUser: getUserReducers,
  token: authReducers,
  courses: courseReducer,
};
