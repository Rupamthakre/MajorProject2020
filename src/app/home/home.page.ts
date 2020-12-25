/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */
import { Component, ViewChild } from '@angular/core';
import { MenuController, IonSlides } from '@ionic/angular';
import { FunctionsService } from '../functions.service';
import { DataService, HomeTab, Product } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('Slides',{static:false}) slides: IonSlides;

  segment = '';
  index = 0;
  data: Array<HomeTab> = [];
  Vegetables: Array<Product> = [];
  Fruits: Array<Product> = [];
  Grocery: Array<Product> = [];
  MilkProduct: Array<Product> = [];
  
  slideOpts = {
    effect: 'flip',
    zoom: false
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private menuCtrl: MenuController,
    public fun: FunctionsService,
    private dataService: DataService)
 {
    this.data = dataService.tabs;
    this.Vegetables = dataService.sponsored;
    this.Fruits = dataService.products_1;
    this.Grocery = dataService.products_2;
    this.MilkProduct = dataService.products_3;
    

    
    const d = this.activatedRoute.snapshot.paramMap.get('id');
    if (d) {
      this.segment = this.data[parseInt(d, 10)].title;
    } else {
      this.segment = this.data[0].title;
    }
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(true, 'end');
  }

  seg(event) {
    this.segment = event.detail.value;
  }
  ngAfterViewInit()
  {

  }

  drag() {
    let distanceToScroll = 0;
    for (let index in this.data) {
      if (parseInt(index) < this.index) {
        distanceToScroll = distanceToScroll + document.getElementById('seg_' + index).offsetWidth + 24;
      }
    }
    document.getElementById('dag').scrollLeft = distanceToScroll;
  }

  preventDefault(e) {
    e.preventDefault();
  }

  async change() {
    await this.slides.getActiveIndex().then(data => this.index = data);
    this.segment = this.data[this.index].title;
    this.drag();
  }

  side_open() {
    this.menuCtrl.toggle('end');
  }

  update(i) {
   this.slides.slideTo(i).then((res) => console.log('responseSlideTo', res));
  }
}
