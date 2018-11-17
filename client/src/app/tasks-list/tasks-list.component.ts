import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {PlantService} from "../shared/plant/plant.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  plants: Array<any>;
  sub: Subscription;
  garden_id: number;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private plantService: PlantService) { }
  displayedColumns = ['id', 'name', 'updatedAt','isHydrated','isFertilized','isExaggerated','isMedicine'];
  //https://www.google.pl/search?q=
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      const username = sessionStorage.getItem("AuthUsername");
      this.plantService.getAllPlants(username).subscribe(data => {
        this.plants = data;
      });
    });
  }
  remove(plant_id) {
    this.plantService.remove(this.garden_id, plant_id).subscribe(result => {
      window.location.reload();
    }, error => console.error(error));
  }
}
