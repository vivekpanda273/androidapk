import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AgmCoreModule } from '@agm/core';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage
   

  ],
  imports: [
    BrowserModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule.forRoot(MyApp,{})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}