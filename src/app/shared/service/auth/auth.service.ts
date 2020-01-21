import {Injectable} from '@angular/core';
import {AuthorizedUser} from "../../model/course/impl/authorized-user";
import {User} from "../../model/course/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: AuthorizedUser;

  constructor() {
  }

  public getUserInfo(): AuthorizedUser {
    return this.user;
  }

  public authorization(login: String, password: String): void {
    let user = this.getUserInfo();
    if (login === user.login && password === user.password) {
      this.user = new AuthorizedUser(1, 'Alex', 'Nikolson', 'user', 'user');
    }
  }

  public logout(): User {
    return undefined;
  }
}
