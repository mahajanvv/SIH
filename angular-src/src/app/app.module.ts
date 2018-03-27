import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './user/components/navbar/navbar.component';
import { LoginComponent } from './user/components/login/login.component';
import { RegisterComponent } from './user/components/register/register.component';
import { HomeComponent } from './user/components/home/home.component';
import { DashboardComponent } from './user/components/dashboard/dashboard.component';
import { ProfileComponent } from './user/components/profile/profile.component';
import {PdashboardComponent} from '../app/police/componentrs/pdashboard/pdashboard.component';
import {PhomeComponent} from '../app/police/componentrs/phome/phome.component';
import {PloginComponent} from '../app/police/componentrs/plogin/plogin.component';
import {PnavbarComponent} from '../app/police/componentrs/pnavbar/pnavbar.component';
import {PprofileComponent} from '../app/police/componentrs/pprofile/pprofile.component';
import {PregisterComponent} from '../app/police/componentrs/pregister/pregister.component';
import { AddcrimeComponent } from '../app/police/componentrs/addcrime/addcrime.component';
import { AddvictimComponent } from '../app/police/componentrs/addvictim/addvictim.component';
import { CrimestatComponent } from '../app/police/componentrs/crimestat/crimestat.component';
import { GetcrimeComponent } from '../app/police/componentrs/getcrime/getcrime.component';
import { ShowcrimemapComponent } from '../app/police/componentrs/showcrimemap/showcrimemap.component';
import { UpdatecrimeComponent } from '../app/police/componentrs/updatecrime/updatecrime.component';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ValidateService } from './user/services/validate.service';
import { UserserviceService } from './user/services/userservice.service';
import { PoliceserviceService } from '../app/police/services/policeservice.service';
import { PolicevalidateService } from '../app/police/services/policevalidate.service';
import { CommunicationService } from '../app/user/services/communication.service';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './user/guards/auth.guard';
import { PoliceGuard } from '../app/police/guards/police.guard';

import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { AgmJsMarkerClustererModule, ClusterManager } from '@agm/js-marker-clusterer';


import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { VisualComponent } from './user/components/visual/visual.component';


const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'visual',component:VisualComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'phome', component:PhomeComponent},
  {path:'pregister', component: PregisterComponent},
  {path:'plogin', component: PloginComponent},
  {path:'pdashboard', component: PdashboardComponent, canActivate:[PoliceGuard]},
  {path:'pprofile', component: PprofileComponent, canActivate:[PoliceGuard]}
]


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("49584688005-uqs3fvvhm3jephtjkd74m41lct1m3815.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1487088254733512")
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    PloginComponent,
    PregisterComponent,
    PdashboardComponent,
    PhomeComponent,
    PnavbarComponent,
    PprofileComponent,
    VisualComponent,
    AddcrimeComponent,
    AddvictimComponent,
    UpdatecrimeComponent,
    GetcrimeComponent,
    CrimestatComponent,
    ShowcrimemapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SocialLoginModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDp3nysHy3tE0IoyC3zxPH3XVkV17NYJFE'
    ,libraries:["places"]}),
    AgmSnazzyInfoWindowModule,
    AgmJsMarkerClustererModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    Ng2GoogleChartsModule
  ],
  exports:[],
  providers: [ValidateService, UserserviceService, PoliceserviceService,ClusterManager,
    CommunicationService, 
    PolicevalidateService, PoliceGuard, AuthGuard, { provide: AuthServiceConfig,
    useFactory: provideConfig
  } ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
