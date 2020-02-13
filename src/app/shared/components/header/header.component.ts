import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IUser} from '../../model/course/IUser';
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthService) {
  }

  public logout() {
    this.authService.logout();
  }
}
