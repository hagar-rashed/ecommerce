import { Component, OnInit } from '@angular/core';
import products from '../../assets/products.json';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allProducts : Array<Product>  = products;
  constructor() { }

  ngOnInit(): void {
    console.log(this.allProducts);
  }

}
