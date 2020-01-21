import {Injectable} from '@angular/core';
import {AuthorizedUser} from "../../model/course/impl/authorized-user";
import {User} from "../../model/course/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: AuthorizedUser;

  constructor(public router: Router) {
  }

  public getUserInfo(): AuthorizedUser {
    return this.user;
  }

  public authorization(login: String, password: String): void {
    let user = new AuthorizedUser(1, 'Alex', 'Nikolson', 'user', 'user');

    if (login === user.login && password === user.password) {
      this.user = user;
      this.router.navigate(['']);
    }
  }

  public logout(): User {
    return undefined;
  }
}
