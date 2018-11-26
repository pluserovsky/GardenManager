import { Component, OnInit } from '@angular/core';
import {TokenStorage} from "../shared/token/token.storage";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  constructor(private token: TokenStorage) {
  }

  ngOnInit() {
    this.info = {
      token: sessionStorage.getItem("AuthToken"),
      username:  sessionStorage.getItem("AuthUsername"),
      authorities: sessionStorage.getItem("AuthAuthorities"),
    };

  }
  logout() {
    sessionStorage.clear();
    window.location.reload();
  }


}
