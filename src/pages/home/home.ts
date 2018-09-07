import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  
    }
    goMain() {
      this.navCtrl.push(MainPage);
    }
 
  }


