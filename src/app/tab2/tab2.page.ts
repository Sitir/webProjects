import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public data: any;
  public forecastWeather: any = []
  constructor(private service: ServiceService) {
    this.data = this.service.favorties;

  }


  ionViewWillEnter() {
    this.data = this.service.favorties;
  }
  ionViewWillLeave() {
    this.data = null;
  }
}
