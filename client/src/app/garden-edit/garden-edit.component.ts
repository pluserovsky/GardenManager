import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {GardenService} from '../shared/garden/garden.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-garden-edit',
  templateUrl: './garden-edit.component.html',
  styleUrls: ['./garden-edit.component.css']
})
export class GardenEditComponent implements OnInit {
  garden: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private gardenService: GardenService,
  ) {
  }

  ngOnInit() {
    if (sessionStorage.getItem("AuthToken")) {
      this.sub = this.route.params.subscribe(params => {
        const id = params['id'];
        if (id) {
          this.gardenService.get(sessionStorage.getItem("AuthUsername"), id).subscribe((garden: any) => {
            if (garden) {
              this.garden = garden;
              this.garden.href = id;
            } else {
              console.log(`Garden with id '${id}' not found, returning to list`);
              this.gotoList();
            }
          });
        }
      });
    } else this.router.navigate(['/login']);
  }

  gotoList() {
    this.router.navigate(['/garden-list']);
  }

  save(form: NgForm) {
    this.gardenService.save(form, sessionStorage.getItem("AuthUsername")).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.gardenService.remove(href, sessionStorage.getItem("AuthUsername")).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
