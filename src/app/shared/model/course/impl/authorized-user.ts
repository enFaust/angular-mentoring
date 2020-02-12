import {User} from "../user";

export class AuthorizedUser implements User {
  id: number;
  firstName: string;
  lastName: string;
  login: string;
  password: string;

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
