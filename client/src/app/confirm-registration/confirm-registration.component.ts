import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-confirm-registration',
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.css']
})
export class ConfirmRegistrationComponent implements OnInit {
  sub: Subscription;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const token = params['token'];
      console.log(token);
      this.userService.confirm(token);
    });
  }

}
