import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import {FormGroup, FormBuilder, Validators, NgForm, NgModel} from '@angular/forms';
import {AuthService} from "../shared/auth/auth.service";
import {TokenStorage} from "../shared/token/token.storage";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  user: LoginModel = new LoginModel(null,null);
  hide = true;
  info: any;
  constructor(private formBuilder: FormBuilder, private router: Router, public dialog: MatDialog, private authService: AuthService, private token: TokenStorage) { }

  ngOnInit() {
    if (this.token.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.token.getAuthorities();
    }
    this.info = {
      token: sessionStorage.getItem("AuthToken"),
      username:  sessionStorage.getItem("AuthUsername"),
      authorities: sessionStorage.getItem("AuthAuthorities"),
    };
  }

  onLoginSubmit() {

    this.authService.attemptAuth(this.user.username, this.user.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.token.saveUsername(data.username);
        this.token.saveAuthorities(data.authorities);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.token.getAuthorities();
        window.location.reload();
        this.router.navigate(['garden-list']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

}
