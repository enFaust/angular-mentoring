import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {ICurrentUserState} from "../../store/states/user";
import {IUser} from "../../model/user/IUser";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  user: IUser;

  @Output()
  public logOut: EventEmitter<string> = new EventEmitter<string>();

  constructor(private authService: AuthService) {

  }

  public logout() {
    this.user = undefined;
    this.authService.logout();
  }

  ngOnInit(): void {
    this.authService.getUserData().subscribe(data => {
      console.log(data)
      this.user = data
    });
  }

}
