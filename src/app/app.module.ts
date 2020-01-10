import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CarsService} from './services/cars.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {InfoBannerComponent} from './pages/info-baner/info-banner.component';
import {UIService} from './services/ui.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxSpinnerModule} from 'ngx-spinner';
import { CreateCarComponent } from './pages/cars/subPages/create-car/create-car.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule
  ],
  providers: [CarsService, UIService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
