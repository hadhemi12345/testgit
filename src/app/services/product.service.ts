import { Injectable } from '@angular/core';
import { Product } from '../core/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listService:Product[]=[
    {id:'1',title:'T-shirt 1',quantity:10,price:100,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395'},
    {id:'2',title:'T-shirt 2',quantity:0,price:20,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395'},
    {id:'3',title:'T-shirt 3',quantity:10,price:50,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395'}
  ];
  constructor() { }

  addProduct(product:Product){
    this.listService.push(product)
  }
}
