import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Car} from '../../models/cars';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit, OnChanges {
  @Input() pageCount: number;
  @Output('update') paginate: EventEmitter<number> = new EventEmitter<number>();
  pages: Array<number>;
  currentPage: number;

  constructor(private spinner: NgxSpinnerService) {
  }

  ngOnInit() {

  }

  getPageElements() {
    return this.pages;
  }

  getPage(i: number) {
    this.spinner.show().then(() => {
      this.currentPage = i;
      this.paginate.emit(this.currentPage);
    });

  }

  checkLastPage() {
    return this.currentPage >= this.pageCount ? true : false;
  }

  checkFirstPage() {
    return this.currentPage < this.pageCount ? true : false;
  }

  previousPage() {

    if (this.currentPage === 1) {
      return;
    }
    this.spinner.show().then(() => {
      this.currentPage = this.currentPage - 1;

      this.paginate.emit(this.currentPage);
    });
  }

  nextPage() {

    if (this.checkLastPage()) {
      return;
    }
    this.spinner.show().then(() => {
    this.currentPage = this.currentPage + 1;
    this.paginate.emit(this.currentPage);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentPage = 1;

    this.pages = Array.from({length: this.pageCount}, (v, k) => k + 1);


  }

}
