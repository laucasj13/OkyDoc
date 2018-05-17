import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-registrer',
  templateUrl: 'registrer.html',
})
export class RegistrerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrerPage');
  }

  onClick(){
    this.navCtrl.push(LoginPage);
  }

  onClick1(){
    let alert = this.alertCtrl.create({
      title: 'Bienvenido',
      buttons: ['Aceptar']
    });
    alert.present();
  }
  } 
