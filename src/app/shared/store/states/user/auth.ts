import {IUser} from "../../../model/user/IUser";

export interface IAuthState {
  token: string;
}

export interface ICurrentUserState {
  currentUser: IUser;
}

export const initialAuthState: IAuthState = {
  token: null
};

export const initialCurrentUserState: ICurrentUserState = {
  currentUser: null
}
