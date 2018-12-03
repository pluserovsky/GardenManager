import {Component, OnInit} from '@angular/core';
import {RegisterModel} from "../models/register.model";
import {FormBuilder, NgForm} from "@angular/forms";
import {UserService} from "../shared/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  isSignUpFailed = false;
  isSignedUp = false;
  errorMessage = '';
  hide = true;
  token: string;
  sub: Subscription;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit() {

  }

  gotoLogin() {
    this.router.navigate(['/']);
  }

  save(form: NgForm) {
    this.userService.save(form).subscribe(result => {
      this.gotoLogin();
      this.isSignedUp = true;
      this.isSignUpFailed = false;
    }, error => {
      console.error(error);
      this.errorMessage = error.error.message;
      this.isSignUpFailed = true;
    });
  }
}
