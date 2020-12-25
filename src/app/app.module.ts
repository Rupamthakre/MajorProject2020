
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InfomodalPage } from './infomodal/infomodal.page';
import { HttpClientModule } from '@angular/common/http';
import {ShopkeeperPageModule} from './shopkeeper/shopkeeper.module';

import {StartingComponent} from './starting/starting.component';
@NgModule({
  declarations: [AppComponent, InfomodalPage,StartingComponent],
  entryComponents: [InfomodalPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ShopkeeperPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
