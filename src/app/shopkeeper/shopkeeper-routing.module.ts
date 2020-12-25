import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopkeeperPage } from './shopkeeper.page';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {DeliveryInfoComponent} from './delivery-info/delivery-info.component';
import {ProductCatalougeComponent} from './product-catalouge/product-catalouge.component';
import {ProductCategoryComponent} from './product-category/product-category.component';
import {SelectCityComponent} from './select-city/select-city.component';
import {ShopRegisterComponent} from './shop-register/shop-register.component';
import {ShopkeeperInfoComponent} from './shopkeeper-info/shopkeeper-info.component';

const routes: Routes = [
  {
    path: '',
    component: ShopkeeperPage
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'deliveryinfo',
    component:DeliveryInfoComponent
  },
  {
    path:'catalouge',
    component:ProductCatalougeComponent
  },
  {
    path:'category',
    component:ProductCategoryComponent
  },
  {
    path:'scity',
    component:SelectCityComponent
  },
  {
    path:'shopregister',
    component:ShopRegisterComponent
  },
  {
    path:'shopinfo',
    component:ShopkeeperInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopkeeperPageRoutingModule {}
