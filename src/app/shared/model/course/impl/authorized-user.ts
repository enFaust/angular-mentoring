import {User} from "../user";

export class AuthorizedUser implements User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public login: string;
  public password: string;


  constructor(id: number, firstName: string, lastName: string, login: string, password: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = login;
    this.password = password;
  }
}
