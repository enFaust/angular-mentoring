import {IAuthState, initialAuthState} from "../states/user/auth";
import {AuthActions, EAuthActions} from "../actions/auth";


export const authReducers = (
  state = initialAuthState,
  action: AuthActions
): IAuthState => {
  switch (action.type) {
    case EAuthActions.LOGIN:
      break;
    case EAuthActions.LOGIN_SUCCESS: {
      return;
    }
    case EAuthActions.LOGIN_ERROR:
      return;
    case EAuthActions.LOGOUT:
      return;
    case EAuthActions.LOGOUT_SUCCESS: {
      return;
    }
    case EAuthActions.CURRENT_USER_DATA:
      return;
    case EAuthActions.CURRENT_USER_DATA_SUCCESS:
      return;
    case EAuthActions.CURRENT_USER_DATA_ERROR:
      return;
    default: {
      return state
    }
  }
};

