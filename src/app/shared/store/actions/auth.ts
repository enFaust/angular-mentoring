import {Action} from "@ngrx/store";
import {IUser} from "../../model/user/IUser";

export enum EAuthActions {
    LOGIN = '[Login Page] Login',
    LOGIN_SUCCESS = '[Login Page] Login Success',
    LOGIN_ERROR = '[Login Page] Login Error',
    LOGOUT = '[Login Page] Logout',
    LOGOUT_SUCCESS = '[Login Page] Logout Success',
    CURRENT_USER_DATA = '[Login Page] Get Current User Data',
    CURRENT_USER_DATA_SUCCESS = '[Login Page] Get Current User Data Success',
    CURRENT_USER_DATA_ERROR = '[Login Page] Get Current User Data Error',
}

export class Login implements Action {
    readonly type = EAuthActions.LOGIN;

    constructor(public payload?: {}) {
    }
}

export class LoginSuccess implements Action {
    readonly type = EAuthActions.LOGIN_SUCCESS;

    constructor(public payload?: any) {
    }
}

export class LoginError implements Action {
    readonly type = EAuthActions.LOGIN_ERROR;

    constructor(public payload?: any) {
    }
}

export class CurrentUserData implements Action {
    readonly type = EAuthActions.CURRENT_USER_DATA;

    constructor(public payload: string) {
    }
}

export class CurrentUserDataSuccess implements Action {
    readonly type = EAuthActions.CURRENT_USER_DATA_SUCCESS;

    constructor(public payload: IUser) {
    }
}

export class CurrentUserDataError implements Action {
    readonly type = EAuthActions.CURRENT_USER_DATA_ERROR;

    constructor(public payload?: any) {
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


export type AuthActions =
    Login
    | LoginSuccess
    | LoginError
    | Logout
    | LogoutSuccess
    | CurrentUserData
    | CurrentUserDataSuccess
    | CurrentUserDataError;
