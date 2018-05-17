import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IndexPage } from '../index/index';
import { RegistrerPage } from '../registrer/registrer';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
  onClick(){
    this.navCtrl.push(IndexPage);
  }
  onClick1(){
    this.navCtrl.push(RegistrerPage);
  }
}
