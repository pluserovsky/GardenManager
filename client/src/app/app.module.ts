import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PlantService} from './shared/plant/plant.service';
import {GardenService} from './shared/garden/garden.service';

import {PlantEditComponent} from './plant-edit/plant-edit.component';
import {PlantListComponent} from './plant-list/plant-list.component';
import {GardenListComponent} from './garden-list/garden-list.component';
import {GardenEditComponent} from './garden-edit/garden-edit.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'garden-list', component: GardenListComponent},
  {path: 'plant-list/:id', component: PlantListComponent},
  {path: 'garden-add', component: GardenEditComponent},
  {path: 'garden-edit/:id', component: GardenEditComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  //{path: '**', redirectTo: '/home', pathMatch: 'full'}
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
    GardenEditComponent,
    HomeComponent,
    AboutComponent
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
  providers: [
  [PlantService],  [GardenService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
