import { Component, OnInit } from '@angular/core';
import { ItemsService} from '../services/items.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  currentItems = [];
  message = '';

  constructor(private items: ItemsService) { }

  ngOnInit() {
  }
}
