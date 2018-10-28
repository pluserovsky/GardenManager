import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlantService } from './shared/plant/plant.service';
import { GardenService } from './shared/garden/garden.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlantListComponent } from './plant-list/plant-list.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlantEditComponent } from './plant-edit/plant-edit.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GardenListComponent } from './garden-list/garden-list.component';
import { GardenEditComponent } from './garden-edit/garden-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';

const appRoutes: Routes = [
  { path: '', redirectTo: '/garden-list', pathMatch: 'full' },
  {
    path: 'garden-list',
    component: GardenListComponent
  },
  {
    path: 'garden-add',
    component: GardenEditComponent
  },
  {
    path: 'garden-edit/:id',
    component: GardenEditComponent
  }
];

/**const appRoutes: Routes = [
  { path: '', redirectTo: '/plant-list', pathMatch: 'full' },
  {
    path: 'plant-list',
    component: PlantListComponent
  },
  {
    path: 'plant-add',
    component: PlantEditComponent
  },
  {
    path: 'plant-edit/:id',
    component: PlantEditComponent
  }
];
**/
@NgModule({
  declarations: [
    AppComponent,
    PlantListComponent,
    PlantEditComponent,
    GardenListComponent,
    GardenEditComponent
  ],
  imports: [
    BrowserModule,
	  HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers:
   /** [PlantService],**/  [GardenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
