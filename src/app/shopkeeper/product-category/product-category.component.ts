import { Component, OnInit } from '@angular/core';
import {StaticDataServiceService} from '../static-data-service.service';
import {Protype} from '../Productcategory';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss'],
})
export class ProductCategoryComponent implements OnInit {

  category:Array<Protype>;
  path:string;
  
 

  constructor(private service:StaticDataServiceService,private nav:NavController) {
    this.category = this.service.categ;
  }

  ngOnInit() {}

  open(data)
  {
    this.path=data;
       this.nav.navigateForward(this.path);
  }

}



