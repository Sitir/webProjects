import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageModule} from '../home-page/module/home-page.module';
import {CarsModule} from '../cars/module/cars.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageModule,
    CarsModule
  ]
})
export class PagesModule { }
