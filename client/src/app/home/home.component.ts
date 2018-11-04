import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from '@angular/material';
import {AuthService} from "../shared/auth/auth.service";
import {TokenStorage} from "../shared/token/token.storage";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private authService: AuthService, private token: TokenStorage) {
  }

  username : string
  password : string

  login(): void {
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['garden-list']);
      }
    );
  }
  signOut(): void {
        this.token.signOut();
        this.router.navigate(['garden-list']);
  }

  signup(): void {
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['garden-list']);
      }
    );
  }

  ngOnInit() {
  }

}
