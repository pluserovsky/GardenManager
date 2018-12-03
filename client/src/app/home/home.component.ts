import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;

  constructor() {
  }

  ngOnInit() {
    this.info = {
      token: sessionStorage.getItem("AuthToken"),
      username: sessionStorage.getItem("AuthUsername"),
      authorities: sessionStorage.getItem("AuthAuthorities"),
    };
  }

}
