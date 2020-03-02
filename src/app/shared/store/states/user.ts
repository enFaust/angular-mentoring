import {IUser} from "../../model/user/IUser";

export interface ICurrentUserState {
 user: IUser
}

export const initialCurrentUserState: ICurrentUserState = {
  user: null
};
