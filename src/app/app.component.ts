import {Component, OnInit} from '@angular/core';
import {UIService} from './services/ui.service';
import {BannerControl} from './models/banner-control';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('showBanner', [
      // ...
      state('show', style({
        opacity: 1,
      })),
      state('hide', style({
        opacity: 0,
      })),
      transition('hide => show', [
        animate('1s')
      ]),
      transition('show => hide', [
        animate('0.5s')
      ])
    ])]
})
export class AppComponent implements OnInit {
  title = 'shopManger';
  public bannerDisplay: boolean; //
  public message: string; // response from server
  public typeMessage: number; // 1-3
  public timer: number;

  constructor(public uiService: UIService, private spinner: NgxSpinnerService) {
    this.bannerDisplay = true;

  }

  ngOnInit() {
    this.spinner.show();
    this.uiService.subjectMessenger.subscribe((value) => {
      this.displayBanner(value);
    });


  }

  // it should container type aswell;
  displayBanner(command: BannerControl) {
    this.bannerDisplay = false;
    this.typeMessage = command.typeMessage;
    this.message = command.message;

    this.timer = setTimeout(() => {
      this.bannerDisplay = true;
      clearTimeout(this.timer);
    }, 3000);
    console.log(this.timer);
  }

  hideBanner() {
    clearTimeout(this.timer);
    this.bannerDisplay = true;
  }


}
