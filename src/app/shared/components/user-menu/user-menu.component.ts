import {Component, EventEmitter, Output} from '@angular/core';
import {IUser} from "../../model/course/IUser";
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent  {

  user: IUser;

  @Output()
  public logOut: EventEmitter<string> = new EventEmitter<string>();

  constructor(private authService: AuthService) {
    this.authService.getCurrentUser().subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }

  public isAuth(): boolean {
    return this.authService.isAuthorized();
  }

  public logout() {
    this.user = undefined;
    this.authService.logout();
  }

}
