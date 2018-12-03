import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn = false;

  constructor() {
  }

  ngOnInit() {
    this.isLoggedIn = !!sessionStorage.getItem("AuthToken");
  }

  logout() {
    sessionStorage.clear();
    this.isLoggedIn = false;
    window.location.reload();
  }
}
