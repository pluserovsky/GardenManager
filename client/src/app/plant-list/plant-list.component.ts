import { Component, OnInit } from '@angular/core';
import { PlantService } from '../shared/plant/plant.service';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
	plants: Array<any>;
  sub: Subscription;
  garden_id: number;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private plantService: PlantService) { }
  displayedColumns = ['id', 'name', 'description','notes', 'createdAt','updatedAt',
  'isHydrated','isFertilized','isExaggerated','isMedicine','search','edit','delete'];
  dataSource;
  ngOnInit() {
    if (sessionStorage.getItem("AuthToken")) {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.garden_id = params['id'];
      this.plantService.getAll(id).subscribe(data => {
        this.plants = data;
        this.dataSource = new MatTableDataSource(this.plants);
      });
    });
    }else this.router.navigate(['/login']);
  }
  remove(plant_id) {
    this.plantService.remove(this.garden_id, plant_id).subscribe(result => {
      window.location.reload();
    }, error => console.error(error));
  }
}
