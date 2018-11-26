import { Component, OnInit } from '@angular/core';
import {TokenStorage} from "../shared/token/token.storage";
import {ActivatedRoute} from "@angular/router";
import {PlantService} from "../shared/plant/plant.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  code: string;
  constructor(private token: TokenStorage) {
  }

  ngOnInit() {
    this.info = {
      token: sessionStorage.getItem("AuthToken"),
      username:  sessionStorage.getItem("AuthUsername"),
      authorities: sessionStorage.getItem("AuthAuthorities"),
    };
    this.code ="637a42b8-0c5e-4c2a-b9ff-02b08f45b895";// this.route.params['code'];
  }
  logout() {
    sessionStorage.clear();
    window.location.reload();
  }


}
