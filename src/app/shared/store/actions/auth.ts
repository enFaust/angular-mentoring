import {Action} from "@ngrx/store";
import {IToken} from "../states/auth";

export enum EAuthActions {
    LOGIN = '[Login Page] Login',
    LOGIN_SUCCESS = '[Login Page] Login Success',
    LOGIN_ERROR = '[Login Page] Login Error',
    LOGOUT = '[Login Page] Logout',
    LOGOUT_SUCCESS = '[Login Page] Logout Success'
}

export class Login implements Action {
    readonly type = EAuthActions.LOGIN;

    constructor(public payload: {login: string, password: string}) {
    }
}

export class LoginSuccess implements Action {
    readonly type = EAuthActions.LOGIN_SUCCESS;

    constructor(public payload: IToken) {
    }
}

export class LoginError implements Action {
    readonly type = EAuthActions.LOGIN_ERROR;

    constructor(public payload?: any) {
    }
}


export class Logout implements Action {
    readonly type = EAuthActions.LOGOUT;

    constructor(public payload?: any) {
    }
}

export class LogoutSuccess implements Action {
    readonly type = EAuthActions.LOGOUT_SUCCESS;

    constructor(public payload?: any) {
    }
}


export type AuthActions =
    Login
    | LoginSuccess
    | LoginError
    | Logout
    | LogoutSuccess
