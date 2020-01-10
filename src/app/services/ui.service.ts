import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {BannerControl} from '../models/banner-control';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  // public subjectMessenger = new BehaviorSubject<BannerControl>(null);
  public subjectMessenger = new Subject();

  constructor() {
  }

   emitMessage(command: BannerControl) {
    this.subjectMessenger.next(command);
  }

}
