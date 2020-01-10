import {Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output} from '@angular/core';
import {Car} from '../../../../models/cars';
import {Form, FormBuilder, FormGroup} from '@angular/forms';
import {CarsService} from '../../../../services/cars.service';
import {UIService} from '../../../../services/ui.service';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.scss']
})
export class SingleCarComponent implements OnInit, OnChanges {
  @Input() car: Car;
  @Output('update') changedCarElement: EventEmitter<Car> = new EventEmitter<Car>();
  private carForm: FormGroup;
  private disabledSave: boolean;

  constructor(private fb: FormBuilder, private carsService: CarsService, public uiService: UIService) {
    this.carForm = this.fb.group({
      id: [''],
      car_model: [''],
      car_fabricant: [''],
      email: [''],
      year_production: [''],
      owner_id: ['']
    });
  }


  ngOnInit() {
    this.disabledSave = true;
    this.carForm.setValue(this.car);

  }

  keyActiveButton() {
    this.disabledSave = false;
  }


  ngOnChanges(changes: SimpleChanges): void {

    this.carForm.setValue(this.car);
  }

  save() {

    this.carsService.updateCar(this.carForm.value).subscribe((value) => {
      this.uiService.emitMessage({message: value.message, typeMessage: value.typeMessage});
      this.changedCarElement.emit(value.data);
      this.disabledSave = true;
    });
  }

  deleteCar() {
    if (confirm(`Do you want to delete this element: ${this.car.car_model}`)) {
      this.carsService.deleteCar(this.car.id).subscribe((value) => {
        this.uiService.emitMessage({message: value.message, typeMessage: value.typeMessage});
        this.changedCarElement.emit(value.data);
      });
    } else {
      this.uiService.emitMessage({message: 'Operation Cancelled', typeMessage: 2});
    }
  }
}
