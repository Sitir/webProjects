import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarsRoutingModule} from './cars-routing.module';
import {CarsComponent} from '../cars.component';
import {SingleCarComponent} from '../subPages/single-car/single-car.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppModule} from '../../../app.module';
import {PaginateComponent} from '../../paginate/paginate.component';
import {CreateCarComponent} from '../subPages/create-car/create-car.component';


@NgModule({
  declarations: [CarsComponent, SingleCarComponent, PaginateComponent, CreateCarComponent],
  exports: [
    CarsComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CarsModule {
}
