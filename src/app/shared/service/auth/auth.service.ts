import {Injectable, OnDestroy} from '@angular/core';
import {AuthorizedUser} from "../../model/user/impl/authorized-user";
import {IUser} from "../../model/user/IUser";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  token: string;
  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;
  header: HttpHeaders;

  constructor(public router: Router, private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
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
            this.httpClient.post<IUser>("http://localhost:3004/auth/userinfo", {token}).subscribe(
              data => {
                localStorage.setItem('currentUser', JSON.stringify(data));
                this.currentUserSubject.next(data);
              });
            return true;
          } else {
            return false;
          }
        })
      )
  }

  public getCurrentUser(): Observable<IUser> {
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
  }
}
