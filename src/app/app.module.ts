import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { FooterComponent } from './footer/footer.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { ComputersComponent } from './computers/computers.component';
import { DronesComponent } from './drones/drones.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepagesaleComponent } from './homepagesale/homepagesale.component';
import { MobileComponent } from './mobile/mobile.component';
import { SaleComponent } from './sale/sale.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { TabletsComponent } from './tablets/tablets.component';
import { TvhomeComponent } from './tvhome/tvhome.component';
import { WearableComponent } from './wearable/wearable.component';
import {HttpClientModule} from '@angular/common/http';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    FooterComponent,
    AllproductsComponent,
    BestsellersComponent,
    ComputersComponent,
    DronesComponent,
    HeadphonesComponent,
    HomepageComponent,
    HomepagesaleComponent,
    MobileComponent,
    SaleComponent,
    SpeakersComponent,
    TabletsComponent,
    TvhomeComponent,
    WearableComponent,
    SidenavComponent,
    DashboardComponent,
    LoginComponent,
    UserInfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
