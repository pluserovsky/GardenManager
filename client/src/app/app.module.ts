import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormControl, FormsModule, Validators, NgControl} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms'
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {PlantService} from './shared/plant/plant.service';
import {GardenService} from './shared/garden/garden.service';

import {PlantEditComponent} from './plant-edit/plant-edit.component';
import {PlantListComponent} from './plant-list/plant-list.component';
import {GardenListComponent} from './garden-list/garden-list.component';
import {GardenEditComponent} from './garden-edit/garden-edit.component';
import {HomeComponent} from './home/home.component';
import {ChatComponent} from './chat/chat.component';
import {AboutComponent} from './about/about.component';
import {Interceptor} from "./app.interceptor";
import {AuthService} from "./shared/auth/auth.service";
import {TokenStorage} from "./shared/token/token.storage";
import {CustomMaterialModule} from "./material.module";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {UserService} from "./shared/user/user.service";
import {ParticlesModule} from 'angular-particle';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {ConfirmRegistrationComponent} from './confirm-registration/confirm-registration.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'garden-list', component: GardenListComponent},
  {path: 'tasks-list', component: TasksListComponent},
  {path: 'plant-list/:id', component: PlantListComponent},
  {path: 'garden-add', component: GardenEditComponent},
  {path: 'garden/:gid/plant-add', component: PlantEditComponent},
  {path: 'garden/:gid/plant-edit/:pid', component: PlantEditComponent},
  {path: 'garden-edit/:id', component: GardenEditComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'confirm/:code', component: ConfirmRegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'chat', component: ChatComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PlantListComponent,
    PlantEditComponent,
    GardenListComponent,
    GardenEditComponent,
    HomeComponent,
    ChatComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    TasksListComponent,
    ConfirmRegistrationComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ParticlesModule
  ],
  exports: [
    RouterModule,

    CommonModule
  ],
  entryComponents: [],
  providers: [
    PlantService,
    GardenService,
    AuthService,
    TokenStorage,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
