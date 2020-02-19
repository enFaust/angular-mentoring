import {IAuthState, initialAuthState} from "../states/user/auth";
import {AuthActions, CurrentUserData, EAuthActions} from "../actions/auth";
import {ICurrentUserState} from "../states/user/auth";
import {initialCurrentUserState} from "../states/user/auth";


export const authReducers = (
  state = initialAuthState,
  action: AuthActions
): IAuthState => {
  switch (action.type) {
    case EAuthActions.LOGIN_SUCCESS: {
      return {
        token: action.payload
      }
    }
    case EAuthActions.LOGOUT_SUCCESS: {
      return {
        token: null
      }
    }
    default: {
      return state
    }
  }
};


export const getUserReducers = (
  state = initialCurrentUserState,
  action: AuthActions
): ICurrentUserState => {
  switch (action.type) {
    case EAuthActions.CURRENT_USER_DATA: {
      return {
        currentUser: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

