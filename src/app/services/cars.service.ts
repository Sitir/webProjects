import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Car} from '../models/cars';
import {catchError} from 'rxjs/operators';
import {ResponseCar} from '../models/response-car';
import {Paginate} from '../models/paginate';

@Injectable({
  providedIn: 'root'
})
export class CarsService {


  constructor(private httpClient: HttpClient) {
  }


  getAllCars(page): Observable<Paginate> {
    return this.httpClient.get<Paginate>(environment.api.getAllCars + `?p=${page.toString()}`);
  }

  createNewCar(car: Car): Observable<ResponseCar> {
    return this.httpClient.post<ResponseCar>(environment.api.addNewCar, car);
  }


  updateCar(car: Car): Observable<ResponseCar> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.put<ResponseCar>(environment.api.updateCar + car.id, car);
  }

  deleteCar(id): Observable<ResponseCar> {
    return this.httpClient.delete<ResponseCar>(environment.api.deleteCar + id);
  }

}
