import { Component, OnInit } from '@angular/core';
import { PlantService } from '../shared/plant/plant.service';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
	plants: Array<any>;
  sub: Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private plantService: PlantService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.plantService.getAll(id).subscribe(data => {
        this.plants = data;
      });
    });
  }
}
