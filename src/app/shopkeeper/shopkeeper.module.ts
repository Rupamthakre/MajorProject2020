import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopkeeperPageRoutingModule } from './shopkeeper-routing.module';

import { ShopkeeperPage } from './shopkeeper.page';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {DeliveryInfoComponent} from './delivery-info/delivery-info.component';
import {ProductCatalougeComponent} from './product-catalouge/product-catalouge.component';
import {ProductCategoryComponent} from './product-category/product-category.component';
import {SelectCityComponent} from './select-city/select-city.component';
import {ShopRegisterComponent} from './shop-register/shop-register.component';
import {ShopkeeperInfoComponent} from './shopkeeper-info/shopkeeper-info.component';

import {StaticDataServiceService} from './static-data-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopkeeperPageRoutingModule
  ],
  declarations: [ShopkeeperPage,RegisterComponent,LoginComponent,DeliveryInfoComponent,ProductCatalougeComponent,ProductCategoryComponent,
  SelectCityComponent,ShopRegisterComponent,ShopkeeperInfoComponent],
  providers: [StaticDataServiceService]
})
export class ShopkeeperPageModule {}
