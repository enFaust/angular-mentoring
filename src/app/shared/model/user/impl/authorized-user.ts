import {IUser} from "../IUser";
import {IName} from "../IName";

export class AuthorizedUser implements IUser {
  id: number;
  name: IName;
  login: string;
  password: string;


  constructor() {
  }
}
