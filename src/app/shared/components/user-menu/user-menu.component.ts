import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {User} from "../../model/course/user";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../service/user/user.service";
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnChanges, OnInit {

  userFirstName: String;

  userSecondName: String;

  @Output()
  public logOut: EventEmitter<string> = new EventEmitter<string>();

  constructor(private authService: AuthService) {
  }

  public isAuth(): boolean {
    if(this.authService.isAuthorized() == true){
      this.userFirstName = localStorage.getItem("userFirstName");
      this.userSecondName = localStorage.getItem("userLastName");
    }

    return this.authService.isAuthorized();
  }

  public logout() {
    this.userFirstName = undefined;
    this.userSecondName = undefined;
    this.authService.logout();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Change")

    if (this.isAuth()) {
      console.log("Auth" + this.authService.isAuthorized());
      this.userFirstName = localStorage.getItem("userFirstName");
      this.userSecondName = localStorage.getItem("userLastName");
    }
  }

  ngOnInit(): void {
    if (this.isAuth()) {
      this.userFirstName = localStorage.getItem("userFirstName");
      this.userSecondName = localStorage.getItem("userLastName");
    }
  }
}
