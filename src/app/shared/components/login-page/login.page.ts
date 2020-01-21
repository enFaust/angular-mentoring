import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {


  private login: String;
  private password: String;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  public authorization() {
    this.authService.authorization(this.login, this.password);
    console.log("auth")
    window.location.href = "/";
  }

}
