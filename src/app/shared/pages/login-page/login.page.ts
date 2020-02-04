import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  public static TITLE: string = "Login page";

  // @ts-ignore
  @ViewChild('login')
  private login: ElementRef;

  // @ts-ignore
  @ViewChild("password")
  private password: ElementRef;

  constructor(private authService: AuthService, private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(LoginPage.TITLE);
  }

  public authorization() {
    const login = this.login.nativeElement.value;
    const password = this.password.nativeElement.value;

    this.authService.login(login, password);
  }

}
