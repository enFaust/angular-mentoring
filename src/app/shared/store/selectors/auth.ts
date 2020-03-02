import {IToken} from "../states/auth";

export const getUserToken = (state: IToken) => state.token;
