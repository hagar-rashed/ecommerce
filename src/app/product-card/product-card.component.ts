import { Component, OnInit ,Input} from '@angular/core';
import { Product } from '../interfaces/product';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input() product:Product = {

  id  : 0,
  title: '',
  price: 0,
  description: '',
  category: '',
  image:'',
  rating: {
    "rate": 0,
    "count": 0
  }
};
  constructor() { }

  ngOnInit(): void {
  }

}
