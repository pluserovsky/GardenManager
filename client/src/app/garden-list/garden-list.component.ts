import { Component, OnInit } from '@angular/core';
import { GardenService } from '../shared/garden/garden.service';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-garden-list',
  templateUrl: './garden-list.component.html',
  styleUrls: ['./garden-list.component.css']
})
export class GardenListComponent implements OnInit {
  gardens: Array<any>;
  sub: Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private gardenService: GardenService,
             ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const username = sessionStorage.getItem("AuthUsername");
      this.gardenService.getAll(username).subscribe(data => {
        this.gardens = data;
      });
    });
  }

}
