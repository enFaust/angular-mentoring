import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {ICurrentUserState} from "../../store/states/user";
import {IUser} from "../../model/user/IUser";
import {Subscriber, Subscription} from "rxjs";
import {CurrentUserData} from "../../store/actions/user";
import {getCurrentUserState} from "../../store/selectors/user";
import {Store} from "@ngrx/store";
import {SpinnerService} from "../../service/spinner/spinner.service";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit, OnDestroy {

  user: IUser;
  user$: Subscription;

  @Output()
  public logOut: EventEmitter<string> = new EventEmitter<string>();

  constructor(private authService: AuthService, private store: Store<ICurrentUserState>, private spinnerService: SpinnerService) {
  }

  ngOnInit(): void {
    this.spinnerService.turnOn();
    this.store.dispatch(new CurrentUserData(this.authService.getToken()));

    this.user$ = this.store.select(getCurrentUserState).subscribe(data => {
      this.user = data;
      this.spinnerService.turnOff();
    });
  }

  public logout() {
    this.user = undefined;
    this.authService.logout();
  }

  ngOnDestroy(): void {
    if (this.user$) {
      this.user$.unsubscribe();
    }
  }

}
