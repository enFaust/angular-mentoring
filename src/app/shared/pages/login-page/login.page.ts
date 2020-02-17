import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor(private authService: AuthService, private titleService: Title, public router: Router) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(LoginPage.TITLE);
  }

  public authorization() {
    if (this.loginForm.valid) {
      this.routerChanged = true;
      const login = this.loginForm.controls['login'].value;
      const password = this.loginForm.controls['password'].value;

      this.authService.login(login, password).subscribe(resp => {
        if (resp) {
          this.routerChanged = false;
          this.router.navigate(['/courses']);
        }
      }, (error => {
        console.log(error['error']);
        this.loginErrorBlock = true;
        this.routerChanged = false;
      }));
    } else {
      this.showErrorBlock = true;
      this.routerChanged = false;
    }
  }
}
