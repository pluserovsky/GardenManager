import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {PlantService} from "../shared/plant/plant.service";
import {GardenService} from "../shared/garden/garden.service";
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  plant: any = {};
  plants: Array<any>;
  gardens: Array<any>;
  sub: Subscription;
  garden_id: number;
  dataSource;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private plantService: PlantService,
              private gardenService: GardenService) { }
  displayedColumns = ['id', 'name', 'updatedAt','isHydrated','isFertilized','isExaggerated','isMedicine','open'];
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const username = sessionStorage.getItem("AuthUsername");
      this.gardenService.getAll(username).subscribe(data => {
        this.gardens = data;

      });
    });
  }
  remove(plant_id) {
    this.plantService.remove(this.garden_id, plant_id).subscribe(result => {
      window.location.reload();
    }, error => console.error(error));
  }
  tasks(id) {
    this.garden_id=id;
    this.sub = this.route.params.subscribe(params => {
      this.plantService.getAll(id).subscribe(data => {
        this.plants = data;
        this.dataSource = data;
      });
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
/*  update(pid) {
    this.plant = this.plantService.get(this.garden_id, pid);
    this.plant['fertilized'] = !this.plant['fertilized'];
    console.log("Plant " + pid +" gardem " +this.garden_id);
   this.plantService.save(this.plant, pid ).subscribe(result => {}, error => console.error(error));
  }
  html;(change)="update(element.id)"
  */
}
