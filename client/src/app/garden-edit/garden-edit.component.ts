import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { GardenService } from '../shared/garden/garden.service';
//import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-garden-edit',
  templateUrl: './garden-edit.component.html',
  styleUrls: ['./garden-edit.component.css']
})
export class GardenEditComponent implements OnInit, OnDestroy {
  garden: any = {};
  sub: Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private gardenService: GardenService,
              //private giphyService: GiphyService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.gardenService.get(id).subscribe((garden: any) => {
          if (garden) {
            this.garden = garden;
           // this.garden.href = garden._links.self.href;
            //this.giphyService.get(garden.name).subscribe(url => garden.giphyUrl = url);
          } else {
            console.log(`Garden with id '${id}' not found, returning to list`);
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
    this.router.navigate(['/garden-list']);
  }

  save(form: NgForm) {
    this.gardenService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.gardenService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
