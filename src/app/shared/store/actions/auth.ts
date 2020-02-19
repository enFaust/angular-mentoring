import {Action} from "@ngrx/store";
import {IUser} from "../../model/user/IUser";

export enum EAuthActions {
  LOGIN = '[Login Page] Login',
  LOGIN_SUCCESS = '[Login Page] Login Success',
  LOGIN_FAIL = '[Login Page] Login Fail',
  LOGOUT = '[Login Page] Logout',
  LOGOUT_SUCCESS = '[Login Page] Logout Success',
  LOGOUT_FAIL = '[Login Page] Logout Fail',
  CURRENT_USER_DATA = '[Login Page] Get Current User Data',
}

export class Login implements Action {
  readonly type = EAuthActions.LOGIN;

  constructor(public login: string, public password: string) {
  }
}

export class LoginSuccess implements Action {
  readonly type = EAuthActions.LOGIN_SUCCESS;

  constructor(public payload: string) {
  }
}

export class LoginFail implements Action {
  readonly type = EAuthActions.LOGIN_FAIL;

  constructor() {
  }
}

export class CurrentUserData implements Action {
  readonly type = EAuthActions.CURRENT_USER_DATA;

  constructor(public payload: IUser) {
  }
}

export class Logout implements Action {
  readonly type = EAuthActions.LOGOUT;

  constructor() {
  }
}

export class LogoutSuccess implements Action {
  readonly type = EAuthActions.LOGOUT_SUCCESS;

  constructor() {
  }
}

export class LogoutFail implements Action {
  readonly type = EAuthActions.LOGOUT_FAIL;

  constructor() {
  }
}


export type AuthActions = Login | LoginSuccess | LoginFail | Logout | LogoutSuccess | LogoutFail | CurrentUserData
