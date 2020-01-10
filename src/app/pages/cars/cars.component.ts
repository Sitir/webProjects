import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarsService} from '../../services/cars.service';
import {Car} from '../../models/cars';
import {Subscription} from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import {NgxSpinnerService} from 'ngx-spinner';
import {Paginate} from '../../models/paginate';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  animations: [
    trigger('slideIn', [
      transition('* => *', [
        style({opacity: 0}),
        animate('0.5s', style({opacity: 1})),
      ]),
    ])
  ]

})
export class CarsComponent implements OnInit, OnDestroy {
  private carsSub: Subscription;
  items: Paginate;
  viewDetails: boolean;
  currentSelectedCar: Car;
  index: number;
  pagesCounter: number;

  constructor(public carService: CarsService, private spinner: NgxSpinnerService) {
    console.log('From constructor');
    this.viewDetails = false;

  }

  ngOnInit() {
    console.log('from ngOnInit');

    this.collectData();
  }

  ngOnDestroy(): void {
    this.carsSub.unsubscribe();
    this.index = null;
    this.currentSelectedCar = null;
  }

  showDetails(index) {

    this.viewDetails = true;
    this.index = index;
    this.currentSelectedCar = this.items.data[index];
  }

  getCars() {
    return this.items === undefined ? [] :
      this.items.data;
  }

  changedCar(event) {

    if (typeof event === 'boolean' && event === true) {
      this.items.data.splice(this.index, 1);
    }
    // typeof event returns {} instead of Car
    //  && event instanceof Car returns false
    if (event.id === this.currentSelectedCar.id) {
      this.items.data[this.index] = event;
    }
  }


  paginate(event) {

    this.collectData( parseInt(event));
  }

  collectData(page = null) {

    this.carsSub = this.carService.getAllCars(page === null ? 1 : page).subscribe(v => {
      this.items = v;
      this.pagesCounter = v.pageCount;
      this.showDetails(0);
      setTimeout(() => this.spinner.hide(), 700);
    });
  }

  addCar(){
    this.viewDetails = false;

    this.currentSelectedCar = null;
  }

  newCar(event){
   console.log('element created')
  }

}
