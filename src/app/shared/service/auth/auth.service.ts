import {Injectable, OnDestroy} from '@angular/core';
import {IUser} from "../../model/user/IUser";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {map} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {IToken} from "../../store/states/auth";
import {CurrentUserData} from "../../store/actions/user";
import {getCurrentUserState} from "../../store/selectors/user";
import {ICurrentUserState} from "../../store/states/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  header: HttpHeaders;
  user: IUser;

  constructor(public router: Router, private httpClient: HttpClient, private store: Store<IToken>, private userStore: Store<ICurrentUserState>) {
  }

  public isAuthorized(): boolean {
    return !!localStorage.getItem('token');
  }

  public login(login: String, password: String): Observable<string> {
    return this.httpClient.post("http://localhost:3004/auth/login", {login, password})
      .pipe(map(data => {
          return data["token"];
        })
      )
  }

  public getCurrentUser(token: string): Observable<ICurrentUserState> {
    return this.httpClient.post<ICurrentUserState>("http://localhost:3004/auth/userinfo", {token: token}).pipe(
      data => {
        return data;
      });
  }

  public getUserData(): Observable<IUser> {

    this.userStore.dispatch(new CurrentUserData(this.getToken()));

    return this.userStore.select(getCurrentUserState);
  }

  public getToken(): string{
    return localStorage.getItem('token');
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
  }
}
