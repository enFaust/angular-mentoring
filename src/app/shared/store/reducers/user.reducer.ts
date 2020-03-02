import {EUserActions, UserActions} from "../actions/user";
import {ICurrentUserState, initialCurrentUserState} from "../states/user";

export const userReducers = (state = initialCurrentUserState, action: UserActions): ICurrentUserState => {
  const {type, payload} = action;

  switch (type) {
    case EUserActions.CURRENT_USER_DATA:
      return state;
    case EUserActions.CURRENT_USER_DATA_SUCCESS:
      return payload;
    case EUserActions.CURRENT_USER_DATA_ERROR:
      return state;
    default: {
      return state
    }
  }
};
