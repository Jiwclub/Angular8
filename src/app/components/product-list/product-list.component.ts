import { Component, OnInit } from '@angular/core';
import {products} from '../../products'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  // รับค่ามาจากไฟล์ products.ts
  products = products;

  share() {
    window.alert('the products has been shared!')
  }

  ngOnInit(): void {
  }

}
