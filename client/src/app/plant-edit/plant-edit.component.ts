import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from '../shared/plant/plant.service';
import { NgForm } from '@angular/forms';
import {MatTableDataSource} from '@angular/material';

export interface Delay {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-plant-edit',
  templateUrl: './plant-edit.component.html',
  styleUrls: ['./plant-edit.component.css']
})
export class PlantEditComponent implements OnInit, OnDestroy {
  plant: any = {};
  sub: Subscription;
  garden_id: number;
  plant_id: number;
  delays: Delay[] = [
    {value: 0, viewValue: 'nie dotyczy'},
    {value: 21600000, viewValue: 'co 6 godzin'},
    {value: 43200000, viewValue: 'co 12 godzin'},
    {value: 86400000, viewValue: 'raz na dzień'},
    {value: 172800000, viewValue: 'co drugi dzień'},
    {value: 259200000, viewValue: 'co trzeci dzień'},
    {value: 345600000, viewValue: 'co czwaty dzień'},
    {value: 432000000, viewValue: 'co piąty dzień'},
    {value: 604800000, viewValue: 'raz w tygodniu'},
    {value: 864000000, viewValue: 'co 10 dni'},
    {value: 1209600000, viewValue: 'co 2 tygodnie'},
    {value: 1814400000, viewValue: 'co 3 tygodnie'},
    {value: 2592000000, viewValue: 'raz w miesiącu'},
    {value: 5270400000, viewValue: 'co 2 miesiące'},
    {value: 7257600000, viewValue: 'raz na kwartał'},
    {value: 43545600000, viewValue: 'raz na pół roku'},
    {value: 15724800000, viewValue: 'raz na rok'},
    {value: 62899200000, viewValue: 'co 2 lata'},
    {value: 94348800000, viewValue: 'co 3 lata'}
  ];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private plantService: PlantService,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.plant_id = +params['pid'];
      this.garden_id = +params['gid'];
      if (this.plant_id) { //sessionStorage.getItem("AuthUsername")
        this.plantService.get(this.garden_id,this.plant_id).subscribe((plant: any) => {
          if (plant) {
            this.plant = plant;
            this.plant.href = this.plant_id;
          } else {
            console.log(`Plant with id '${this.plant_id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/plant-list/',this.garden_id]);
  }

  save(form: NgForm) {
    // form.controls['plant.lastHydration'].setValue(moment(form.controls['plant.lastHydration']))
    this.plantService.save(form, this.garden_id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.plantService.remove(this.garden_id,this.plant_id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
