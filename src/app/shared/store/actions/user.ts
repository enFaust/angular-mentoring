import {Action} from "@ngrx/store";
import {} from "../states/auth";
import {ICurrentUserState} from "../states/user";

export enum EUserActions {
  CURRENT_USER_DATA = '[User Data] Get Current User Data',
  CURRENT_USER_DATA_SUCCESS = '[User Data] Get Current User Data Success',
  CURRENT_USER_DATA_ERROR = '[User Data] Get Current User Data Error',
}

export class CurrentUserData implements Action {
  readonly type = EUserActions.CURRENT_USER_DATA;

  constructor(public payload: string) {
  }
}

export class CurrentUserDataSuccess implements Action {
  readonly type = EUserActions.CURRENT_USER_DATA_SUCCESS;

  constructor(public payload: ICurrentUserState) {
  }
}

export class CurrentUserDataError implements Action {
  readonly type = EUserActions.CURRENT_USER_DATA_ERROR;

  constructor(public payload?: any) {
  }
}

export type UserActions =
  CurrentUserData
  | CurrentUserDataSuccess
  | CurrentUserDataError;
