import { Component, OnInit } from '@angular/core';
import { PlantService } from '../shared/plant/plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
	plants: Array<any>;
  constructor(private plantService: PlantService) { }

  ngOnInit() {
	  this.plantService.getAll().subscribe(data => {
      this.plants = data;
    });
  }

}
