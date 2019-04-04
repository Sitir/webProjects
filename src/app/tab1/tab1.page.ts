import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { elementStyleProp } from '@angular/core/src/render3';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public cities: any

  public currentCity;

  private hiddenButtonAction = false;

  constructor(public service: ServiceService) {

    this.cities = [

      "Luxembourg",
      "Larochette",
      "Diekirch",
      "Echternach",
      "Esch-sur-Alzette",
      "Grevenmacher",
      "Remich",
      "Vianden",
      "Wiltz",
      "Rumelange ",
      "Ettelbruck ",
      "Dudelange",
      "Differdange ",

    ];
    this.currentCity = this.cities[0];

  }


  selected = () => {
   
    this.service.getWeather(this.currentCity)
    this.hideButton(this.service.data);
  }

  roundDown = (arg) => {
    return Math.ceil(arg);
  }

  roundUp = (arg) => {
    return Math.round(arg);
  }

  getImagesrc = () => {
    if (!this.service.data) {
      return;
    }

    return `http://openweathermap.org/img/w/${this.service.data.weather[0].icon}.png`;
  }


  addTo = async () => {
    this.hiddenButtonAction = true;
    let id = this.service.data.id;
    let name = this.service.data.name;
    let country = this.service.data.sys.country;
    let city = {
      id: id,
      name: name,
      country: country,
      weather: null
    };




    await this.service.favorties.push(city)
    await this.service.getWeatherForecast(id);




    this.service.storage.set("favorites", this.service.favorties);

  }


  hideButton = (data) => {
    if (!data) {
      console.log("error data")
      return;
    }

    const filtered = this.service.favorties.findIndex((e) => {
      console.log(data.id, e.id)
      if (e.id != data.id) {
        return true;
      }
    })


    if (filtered) {
      this.hiddenButtonAction = false;
    }

    this.hiddenButtonAction = true;


  }

}
