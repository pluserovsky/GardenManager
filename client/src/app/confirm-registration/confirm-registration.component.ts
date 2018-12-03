import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {UserService} from "../shared/user/user.service";

@Component({
  selector: 'app-confirm-registration',
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.css']
})
export class ConfirmRegistrationComponent implements OnInit {
  sub: Subscription;
  code: string;

  constructor(private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.code = params['code'];
      this.userService.confirm(this.code).subscribe(result => {
      }, error => console.error(error));
    });
  }

}
