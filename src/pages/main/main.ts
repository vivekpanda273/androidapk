import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { google } from '@agm/core/services/google-maps-types';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
}) 
export class MainPage {
  private myInput:any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  onInput(ev:any):void {
    console.log(ev);
    console.log(this.myInput);
  } 
  

}
