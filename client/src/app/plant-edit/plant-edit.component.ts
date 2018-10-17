import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from '../shared/plant/plant.service';
//import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plant-edit',
  templateUrl: './plant-edit.component.html',
  styleUrls: ['./plant-edit.component.css']
})
export class PlantEditComponent implements OnInit, OnDestroy {
  plant: any = {};
  sub: Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private plantService: PlantService,
              //private giphyService: GiphyService
              ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.plantService.get(id).subscribe((plant: any) => {
          if (plant) {
            this.plant = plant;
            this.plant.href = plant._links.self.href;
            //this.giphyService.get(plant.name).subscribe(url => plant.giphyUrl = url);
          } else {
            console.log(`Plant with id '${id}' not found, returning to list`);
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
    this.router.navigate(['/plant-list']);
  }

  save(form: NgForm) {
    this.plantService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.plantService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
