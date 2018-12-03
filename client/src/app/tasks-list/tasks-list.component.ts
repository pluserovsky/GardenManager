import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {PlantService} from "../shared/plant/plant.service";
import {GardenService} from "../shared/garden/garden.service";

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
  isLoginFailed = false;
  errorMessage = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private plantService: PlantService,
              private gardenService: GardenService) {
  }

  displayedColumns = ['id', 'name', 'updatedAt', 'isHydrated', 'isFertilized', 'isExaggerated', 'isMedicine', 'open'];

  ngOnInit() {
    if (sessionStorage.getItem("AuthToken")) {
      this.sub = this.route.params.subscribe(params => {
        const username = sessionStorage.getItem("AuthUsername");
        this.gardenService.getAll(username).subscribe(data => {
          this.gardens = data;
        }, error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
        });
      });
    } else this.router.navigate(['/login']);
  }

  remove(plant_id) {
    this.plantService.remove(this.garden_id, plant_id).subscribe(result => {
      window.location.reload();
    }, error => console.error(error));
  }

  tasks(id) {
    this.garden_id = id;
    this.sub = this.route.params.subscribe(params => {
      this.plantService.getAll(id).subscribe(data => {
        this.plants = data;
        this.dataSource = data;
      });
    });
  }

}
