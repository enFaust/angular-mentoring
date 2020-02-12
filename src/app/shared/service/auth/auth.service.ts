import {Injectable, OnDestroy} from '@angular/core';
import {AuthorizedUser} from "../../model/course/impl/authorized-user";
import {User} from "../../model/course/user";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  token: string;
  loginSubs: Subscription;
  header: HttpHeaders;
  currentUser: User;

  constructor(public router: Router, private httpClient: HttpClient) {
    let id = localStorage.getItem('id');
    let firstName = localStorage.getItem('firstName');
    let lastName = localStorage.getItem('lastName');
    this.currentUser = new AuthorizedUser(Number(id), firstName, lastName);
  }

  public isAuthorized() {
    return localStorage.getItem('token') != null;
  }

  public login(login: String, password: String): Observable<boolean> {

    return this.httpClient.post("http://localhost:3004/auth/login", {login, password})
      .pipe(map(data => {
          let token = data["token"];
          if (token) {
            localStorage.setItem('token', token);
            this.httpClient.post<{}>("http://localhost:3004/auth/userinfo", {token}).subscribe(
              data => {
                localStorage.setItem('id', data["id"]);
                localStorage.setItem('firstName', data["name"]["first"]);
                localStorage.setItem('lastName', data["name"]["last"]);
              });
            return true;
          } else {
            return false;
          }
        })
      )
  }

  public getCurrentUser(): User {
    return this.currentUser;
  }

  public logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.loginSubs.unsubscribe();
  }
}
