import { Component, OnInit } from '@angular/core';
import{RegisterModel} from "../models/register.model";
import {FormGroup, FormBuilder, Validators, NgForm} from "@angular/forms";
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
  registerForm: NgForm;
  isSignUpFailed = false;
  isSignedUp = false;
  errorMessage = '';
  hide = true;
  token: string;
  sub: Subscription;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {

  }

  confirm() {
    this.sub = this.route.params.subscribe(params => {
      this.token = params['token'];
      this.userService.get(this.token);
    });
  }
  gotoLogin() {
    this.router.navigate(['/']);
  }
  save(form: NgForm) {
    // form.setValue({username: sessionStorage.getItem("AuthUsername")});
    //form.controls['username'].setValue(sessionStorage.getItem("AuthUsername"));
    //console.log(form.get);
    this.userService.save(form).subscribe(result => {
      this.gotoLogin();
      this.isSignedUp = true;
      this.isSignUpFailed = false;
    }, error => {console.error(error);
    this.errorMessage = error.error.message;
    this.isSignUpFailed = true;
    });
  }
}
