import { Component, OnInit } from '@angular/core';
import{RegisterModel} from "../models/register.model";
import {FormGroup, FormBuilder, Validators, NgForm} from "@angular/forms";
import {UserService} from "../shared/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm: NgForm;
  hide = true;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {

  }

  onRegisterSubmit() {
    this.save(this.registerForm);
    console.log(this.user.name + ' ' + this.user.email + ' ' + this.user.password);
  }
  gotoLogin() {
    this.router.navigate(['/login']);
  }
  save(form: NgForm) {
    // form.setValue({username: sessionStorage.getItem("AuthUsername")});
    //form.controls['username'].setValue(sessionStorage.getItem("AuthUsername"));
    //console.log(form.get);
    this.userService.save(form).subscribe(result => {
      this.gotoLogin();
    }, error => console.error(error));
  }
}
