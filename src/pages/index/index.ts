import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendaPage } from '../agenda/agenda';
import { ProfesionalPage } from '../profesional/profesional';
import { ClinicasPage } from '../clinicas/clinicas';
import { ComunidadPage } from '../comunidad/comunidad';
import { ConsultaAutomaticaPage } from '../consulta-automatica/consulta-automatica';
import { FarmaciasPage } from '../farmacias/farmacias';
import { MapsPage } from '../maps/maps';
import { RecetaPage } from '../receta/receta';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

  onComunidad() {
    this.navCtrl.push(ComunidadPage);
  }

  onProfesional() {
    this.navCtrl.push(ProfesionalPage);
  }

  onAgenda() {
    this.navCtrl.push(AgendaPage);
  }

  onMapa() {
    this.navCtrl.push(MapsPage);
  }

  onReceta() {
    this.navCtrl.push(RecetaPage);
  }

  onClinica() {
    this.navCtrl.push(ClinicasPage);
  }

  onConsulta() {
    this.navCtrl.push(ConsultaAutomaticaPage);
  }

  onFarmacias() {
    this.navCtrl.push(FarmaciasPage);
  }
}
