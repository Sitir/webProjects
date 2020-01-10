import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-banner',
  templateUrl: './info-banner.component.html',
  styleUrls: ['./info-banner.component.scss']
})
export class InfoBannerComponent implements OnInit {

  @Input('message') message: string;
  @Input('type') type: number;

  public class: string;

  constructor() {
  }

  ngOnInit() {

  }

  // green 1 warning 2 red 3
  colorChanger(): string {
    let result: string;
    switch (this.type) {
      case 1:
        result = 'positive';
        break;
      case 2:
        result = 'warning';
        break;
      case 3:
        result = 'error';
        break;
      default:
        result = 'info';
        break;
    }
    return result;
  }
}
