import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category : object =[
    {
    id: 1,
    category: "Women's T-Shirts"

    }
    ,
    {
      id: 2,
      category: "Men's T-Shirts"
    },
    {
      id: 3,
      category: "Dresses"
    },
    {
      id: 4,
      category: "Novelty socks"
    },
    {
      id: 5,
      category: "Women's sunglasses"
    }
    ,
    {
      id: 6,
      category: "Men's sunglasses"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
