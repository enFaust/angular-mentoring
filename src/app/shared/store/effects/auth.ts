import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AuthService} from "../../service/auth/auth.service";
import {Store} from "@ngrx/store";
import {IAuthState} from "../states/user/auth";
import {EAuthActions, Login, LoginSuccess} from '../actions/auth'
import {exhaustMap, map, switchMap, withLatestFrom} from "rxjs/operators";
import {Route, Router} from "@angular/router";

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    public router: Router
  ) {
  }

/*
  @Effect()
  logIn$ = this.actions$.pipe(
    ofType<Login>(EAuthActions.LOGIN),
   exhaustMap(action => {
       return this.authService.login(action.login, action.password).subscribe(
         resp => {
           if (resp) {
             this.router.navigate(['/courses']);
           }
         }
       );
     }
   ))
*/

}
