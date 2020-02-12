import {Component, EventEmitter, Output} from '@angular/core';
import {User} from "../../model/course/user";
import {AuthService} from "../../service/auth/auth.service";
import {AuthorizedUser} from "../../model/course/impl/authorized-user";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent  {

  user: User;

  @Output()
  public logOut: EventEmitter<string> = new EventEmitter<string>();

  constructor(private authService: AuthService) {
    this.user = this.authService.getCurrentUser();
  }

  public isAuth(): boolean {
    return this.authService.isAuthorized();
  }

  public logout() {
    this.user = undefined;
    this.authService.logout();
  }

}
