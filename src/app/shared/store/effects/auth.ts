import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AuthService} from "../../service/auth/auth.service";
import {CurrentUserData, EAuthActions, Login, LoginError, LoginSuccess} from '../actions/auth'
import {catchError, map, switchMap} from "rxjs/operators";
import {Router} from "@angular/router";
import {error} from "util";

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    public router: Router
  ) {
  }

  /*@Effect()
  logIn$ = this.actions$.pipe(
    ofType<Login>(EAuthActions.LOGIN),
    switchMap(action =>
      this.authService.login(action.payload["login"], action.payload["password"]).pipe(
        map(() => new LoginSuccess())
      ),catchError( err => new LoginError(err))
    ));

  @Effect()
  currentUserData$ = this.actions$.pipe(
    ofType<CurrentUserData>(EAuthActions.CURRENT_USER_DATA),

  );*/

}
