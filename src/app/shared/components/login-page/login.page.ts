import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  // @ts-ignore
  @ViewChild('login')
  private login: ElementRef;

  // @ts-ignore
  @ViewChild("password")
  private password: ElementRef;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

  }

  public authorization() {
    const login = this.login.nativeElement.value;
    const password = this.password.nativeElement.value;

    this.authService.login(login, password);
  }

}
