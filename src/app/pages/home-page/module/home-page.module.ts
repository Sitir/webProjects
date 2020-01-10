import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import {HomePageComponent} from '../home-page.component';
import {CarsModule} from '../../cars/module/cars.module';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    CarsModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
