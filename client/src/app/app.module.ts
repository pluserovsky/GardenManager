import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlantService } from './shared/plant/plant.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlantListComponent } from './plant-list/plant-list.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlantEditComponent } from './plant-edit/plant-edit.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
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

@NgModule({
  declarations: [
    AppComponent,
    PlantListComponent,
    PlantEditComponent
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PlantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
