import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';


interface Temp_Data {
  id: string
  weahter_list: []
}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly api_key = 'eecf1fdd445bbf00118d74ed3c9272ae';
  public data: any = null;

  public countries: any = null;
  public favorties: any = [];
  public temp_value: any = null;
  constructor(private httpClient: HttpClient, private file: File, public storage: Storage) {

    this.storage.get('favorites').then((val) => {
      if (val) {
        this.favorties = val;
      }
    });
  }






  loadFile = async () => {
    try {



    } catch (err) {

      console.log(err)
    }
  }

  getWeather(city: string) {

    this.httpClient.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.api_key
    ).subscribe(
      (data) => {
        this.data = data;
        console.log(data)
      }
    );
  }


  getWeatherForecast = async (id: string) => {


    let data = await this.httpClient.get(
      'https://api.openweathermap.org/data/2.5/forecast?id=' + id + '&units=metric&appid=' + this.api_key,
    ).subscribe(
      (data) =>{
        this.temp_value = data;

      }
    );
    data.add(() => {
      let index = this.favorties.findIndex(x => x.id === id);
      this.favorties[index].weather = this.temp_value;
      console.log(this.favorties)
    })


  }


}
