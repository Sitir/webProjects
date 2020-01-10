import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CarsService} from '../../../../services/cars.service';
import {UIService} from '../../../../services/ui.service';
import {Car} from '../../../../models/cars';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent implements OnInit {
  @Output('createNewCar') addNewCar: EventEmitter<Car> = new EventEmitter<Car>();
  private carForm: FormGroup;
  private disabledSave: boolean;
  constructor(private fb: FormBuilder, private carsService: CarsService, public uiService: UIService) {
    this.carForm = this.fb.group({
      car_model: [''],
      car_fabricant: [''],
      email: [''],
      year_production: [''],
      owner_id: ['']
    });

  }

  ngOnInit() {
    this.disabledSave = true;
  }
  keyActiveButton() {
    this.disabledSave = false;
  }
  save() {

    this.carsService.createNewCar(this.carForm.value).subscribe((value) => {
      this.uiService.emitMessage({message: value.message, typeMessage: value.typeMessage});
      this.addNewCar.emit(value.data);
      this.disabledSave = true;
    });
  }


}
