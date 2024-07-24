import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
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

const routes: Routes = [
 { path: 'home-component', component: HomecomponentComponent },
 { path: 'all-products', component: AllproductsComponent },
 { path: '', redirectTo: '/all-products', pathMatch: 'full' } ,
 { path: 'best-sellers', component:BestsellersComponent },
 {path: 'computers', component:ComputersComponent },
 {path: 'drones', component: DronesComponent},
 {path: 'headphones', component: HeadphonesComponent},
 {path: 'home-page', component: HomepageComponent},
 {path: 'homepage-sale', component:HomepagesaleComponent},
 {path: 'mobile', component: MobileComponent},
 {path: 'sale',component: SaleComponent},
 {path: 'speakers', component: SpeakersComponent},
 {path:'tablets' , component: TabletsComponent},
 {path:'tv-home' , component: TvhomeComponent},
 {path:'wearable', component: WearableComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
