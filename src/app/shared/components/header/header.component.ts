import {Component, OnInit} from '@angular/core';
import {User} from '../../model/course/user';
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user = this.authService.getUserInfo();
  }

  public logout() {
    this.authService.logout();
    this.user = undefined;
  }
}
