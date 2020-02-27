import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {authReducers} from "../../shared/store/reducers/auth.reducers";
import {courseReducer} from "../../courses/store/reducers/courses";


export const appReducers: ActionReducerMap<AppState, any> = {
 // token: authReducers,
  courses: courseReducer,
};
