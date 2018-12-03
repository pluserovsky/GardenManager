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
  i: number;
  isLoginFailed = false;
  errorMessage = '';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private gardenService: GardenService,
             ) { }

  displayedColumns = ['id', 'name', 'description', 'createdAt','updatedAt','open','edit','delete'];
  ngOnInit() {
    this.i =0;
    if (sessionStorage.getItem("AuthToken")) {
      this.sub = this.route.params.subscribe(params => {
        const username = sessionStorage.getItem("AuthUsername");
        this.gardenService.getAll(username).subscribe(data => {
          this.gardens = data;
        });
      },error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      });
    }
    else this.router.navigate(['/login']);
  }
  remove(href) {
    this.gardenService.remove(href,sessionStorage.getItem("AuthUsername")).subscribe(result => {
      window.location.reload();
    }, error => console.error(error));
  }
}
