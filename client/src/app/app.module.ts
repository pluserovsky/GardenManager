import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormControl, FormsModule, Validators, NgControl} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {
  MatButtonModule,
  MatCardModule,
  MatDialog,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatGridListModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {PlantService} from './shared/plant/plant.service';
import {GardenService} from './shared/garden/garden.service';

import {PlantEditComponent} from './plant-edit/plant-edit.component';
import {PlantListComponent} from './plant-list/plant-list.component';
import {GardenListComponent} from './garden-list/garden-list.component';
import {GardenEditComponent} from './garden-edit/garden-edit.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {Interceptor} from "./app.interceptor";
import {AuthService} from "./shared/auth/auth.service";
import {TokenStorage} from "./shared/token/token.storage";
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import {CustomMaterialModule} from "./material.module";


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
    AboutComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    CommonModule,
  ],
  exports:[
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    CommonModule
  ],
 entryComponents: [ErrorDialogComponent],
  providers: [ErrorDialogComponent, PlantService, GardenService, AuthService, TokenStorage,
    {provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi : true}
],
  bootstrap: [AppComponent]
})
export class AppModule {
}
