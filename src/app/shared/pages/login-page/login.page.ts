import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/state/app.state";
import {Login} from "../../store/actions/auth";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  static TITLE: string = "Login page";

  loginErrorBlock = false;
  showErrorBlock = false;
  routerChanged = false;

  loginForm: FormGroup = new FormGroup({
    "login": new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
      Validators.minLength(3)
    ]),
    "password": new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
      Validators.minLength(3)
    ])
  });

  constructor(private authService: AuthService, private titleService: Title, public router: Router, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(LoginPage.TITLE);
  }

  public authorization() {
    if (this.loginForm.valid) {
      this.routerChanged = true;
      const login = this.loginForm.controls['login'].value;
      const password = this.loginForm.controls['password'].value;

      const payload = {
        login: login,
        password: password
      };
      this.store.dispatch(new Login(payload));
      this.router.navigate(['/courses'])
    } else {
      this.showErrorBlock = true;
      this.routerChanged = false;
    }
  }
}
