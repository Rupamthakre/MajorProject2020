import { Injectable } from '@angular/core';
import {Protype} from './Productcategory';


@Injectable({
  providedIn: 'root'
})

//export interface Protype{  name:string;  image:string; path:string; }
export class StaticDataServiceService {

  constructor() { }

  categ:Array<Protype> = 
  [
    {name:'Grocery',image:'assets/products/grocery.jpg',path:'catalouge'},
    {name:'Vegetables',image:'assets/products/vegetables.jpg',path:''},
    {name:'Fruits',image:'assets/fruits.jpg',path:'catalouge'},
    {name:'Milk Products',image:'assets/products/milkproduct.jpg', path:'machine'},
    
  ];

}
