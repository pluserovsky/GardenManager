import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn = false;
  constructor( private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("AuthToken")) {
      this.isLoggedIn = true;
    }
    else this.isLoggedIn = false;
  }
  logout() {
    sessionStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
