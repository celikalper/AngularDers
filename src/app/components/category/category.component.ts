import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category1={
    categoryId: 1,
    categoryName: 'Beverages',
  }
  category2={
    categoryId: 2,
    categoryName: 'Condiments',
  }
  category3={
    categoryId: 3,
    categoryName: 'Confections',
  }
  category4={
    categoryId: 4,
    categoryName: 'Dairy Products',
  }
  category5={
    categoryId: 5,
    categoryName: 'Grains/Cereals',
  }
  category6={
    categoryId: 6,
    categoryName: 'Meat/Poultry',
  }
  category7={
    categoryId: 7,
    categoryName: 'Produce',
  }
  category8={
    categoryId: 8,
    categoryName: 'Seafood',
  }

  categories =[
    this.category1,
    this.category2,
    this.category3,
    this.category4,
    this.category5
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
