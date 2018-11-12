import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from '../shared/plant/plant.service';
//import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

export interface Delay {
  value: string;
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
    {value: '0001-01-01T00:00:00', viewValue: 'nie dotyczy'},
    {value: '0001-01-01T05:00:00', viewValue: 'co 6 godzin'},
    {value: '0001-01-01T11:00:00', viewValue: 'co 12 godzin'},
    {value: '0001-01-01T23:00:00', viewValue: 'raz na dzień'},
    {value: '0001-01-03T00:00:00', viewValue: 'co drugi dzień'},
    {value: '0001-01-04T00:00:00', viewValue: 'co trzeci raz'},
    {value: '0001-01-05T00:00:00', viewValue: 'co czwaty dzień'},
    {value: '0001-01-06T00:00:00', viewValue: 'co piąty dzień'},
    {value: '0001-01-07T00:00:00', viewValue: 'raz w tygodniu'},
    {value: '0001-01-15T00:00:00', viewValue: 'co 2 tygodnie'},
    {value: '0001-01-22T00:00:00', viewValue: 'co 3 tygodnie'},
    {value: '0001-02-01T00:00:00', viewValue: 'raz w miesiącu'},
    {value: '0001-03-01T00:00:00', viewValue: 'co 2 miesiące'},
    {value: '0001-04-01T00:00:00', viewValue: 'raz na kwartał'},
    {value: '0001-07-01T00:00:00', viewValue: 'raz na pół roku'},
    {value: '0002-01-01T00:00:00', viewValue: 'raz na rok'},
    {value: '0003-01-01T00:00:00', viewValue: 'co 2 lata'},
  ];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private plantService: PlantService,
              //private giphyService: GiphyService
              ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.plant_id = +params['pid'];
      this.garden_id = +params['gid'];
      if (this.plant_id) { //sessionStorage.getItem("AuthUsername")
        this.plantService.get(this.garden_id,this.plant_id).subscribe((plant: any) => {
          if (plant) {
            this.plant = plant;
            //this.plant.href = plant._links.href;
            //this.giphyService.get(plant.name).subscribe(url => plant.giphyUrl = url);
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
