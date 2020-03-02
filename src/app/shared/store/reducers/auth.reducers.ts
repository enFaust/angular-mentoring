import {initialToken, IToken} from "../states/auth";
import {AuthActions, EAuthActions} from "../actions/auth";


export const tokenReducers = (state = initialToken, action: AuthActions ): IToken => {
  const {type, payload} = action;

  switch (action.type) {
    case EAuthActions.LOGIN:
      return state;
    case EAuthActions.LOGIN_SUCCESS: {
      return payload;
    }
    case EAuthActions.LOGIN_ERROR:
      return ;
    case EAuthActions.LOGOUT:
      return ;
    case EAuthActions.LOGOUT_SUCCESS: {
      return ;
    }
    default: {
      return state
    }
  }
}




