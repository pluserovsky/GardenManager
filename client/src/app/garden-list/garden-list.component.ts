import { Component, OnInit } from '@angular/core';
import { GardenService } from '../shared/garden/garden.service';

@Component({
  selector: 'app-garden-list',
  templateUrl: './garden-list.component.html',
  styleUrls: ['./garden-list.component.css']
})
export class GardenListComponent implements OnInit {
  gardens: Array<any>;

  constructor(private gardenService: GardenService) {
  }

  ngOnInit() {
    this.gardenService.getAll().subscribe(data => {
      this.gardens = data;
    });
  }

}
