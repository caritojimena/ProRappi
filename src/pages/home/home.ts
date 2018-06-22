import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello Home Component');
    this.text = 'Hello Home';
  }

}
