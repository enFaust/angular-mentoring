import {Injectable} from '@angular/core';
import {AuthorizedUser} from "../../model/course/impl/authorized-user";
import {User} from "../../model/course/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: boolean = false;

  constructor(public router: Router) {
  }

  public isAuthorized(){
    let userId = localStorage.getItem('userId');

    return userId != null;
  }

  public login(login: String, password: String): void {
    let user = new AuthorizedUser(1, 'Alex', 'Nikolson', 'user', 'user');

    if (login === user.login && password === user.password) {
      this.auth = true;
      localStorage.setItem('userId', user.id.toString());
      localStorage.setItem('userFirstName', user.firstName);
      localStorage.setItem('userLastName', user.lastName);
      this.router.navigate(['/courses']);
    }
  }

  public logout() {
    this.auth = false;

    localStorage.removeItem('userId');
    localStorage.removeItem('userFirstName');
    localStorage.removeItem('userLastName');
    this.router.navigate(['/login']);
  }
}
