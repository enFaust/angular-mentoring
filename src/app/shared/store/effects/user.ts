import {Actions, Effect, ofType} from "@ngrx/effects";
import {of} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";
import {CurrentUserData, CurrentUserDataError, CurrentUserDataSuccess, EUserActions} from "../actions/user";
import {catchError, map, switchMap} from "rxjs/operators";

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    public router: Router
  ) {
  }

  @Effect()
  currentUserData$ = this.actions$.pipe(
    ofType<CurrentUserData>(EUserActions.CURRENT_USER_DATA),
    switchMap((token) => this.authService.getCurrentUser(token.payload).pipe(
      map(user => {
        return new CurrentUserDataSuccess(user)
      }),
      catchError(err => of(new CurrentUserDataError(err)))
    )));
}
