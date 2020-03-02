import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {tokenReducers} from "../../shared/store/reducers/auth.reducers";
import {courseReducer} from "../../courses/store/reducers/courses";
import {userReducers} from "../../shared/store/reducers/user.reducer";


export const appReducers: ActionReducerMap<AppState, any> = {
  token: tokenReducers,
  currentUser: userReducers,
  courses: courseReducer,
};
