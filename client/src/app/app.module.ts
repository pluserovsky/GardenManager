import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlantService } from './shared/plant/plant.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlantListComponent } from './plant-list/plant-list.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PlantListComponent
  ],
  imports: [
    BrowserModule,
	  HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [PlantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
