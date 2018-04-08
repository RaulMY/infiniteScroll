import { Component, OnInit } from '@angular/core';
import { ItemsService} from './services/items.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentItems = [];
  start = 0;
  segment = 20;
  max = 96;

  constructor(private items: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.items.getItems(this.start, this.segment)
    .subscribe(items => {
      this.currentItems = this.currentItems.concat(items);
      console.log(items);
      this.start += 20;
      if (this.start >= this.max) {
        this.start = this.start - this.max;
      }
    });
  }

}
