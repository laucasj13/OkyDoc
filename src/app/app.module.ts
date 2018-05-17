import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { IndexPage } from '../pages/index/index';
import { RegistrerPage } from '../pages/registrer/registrer';
import { AgendaPage } from '../pages/agenda/agenda';
import { ProfesionalPage } from '../pages/profesional/profesional';
import { ClinicasPage } from '../pages/clinicas/clinicas';
import { ComunidadPage } from '../pages/comunidad/comunidad';
import { ConsultaAutomaticaPage } from '../pages/consulta-automatica/consulta-automatica';
import { FarmaciasPage } from '../pages/farmacias/farmacias';
import { MapsPage } from '../pages/maps/maps';
import { RecetaPage } from '../pages/receta/receta';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    IndexPage,
    RegistrerPage,
    AgendaPage,
    ProfesionalPage,
    ClinicasPage,
    ComunidadPage,
    ConsultaAutomaticaPage,
    FarmaciasPage,
    MapsPage,
    RecetaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    IndexPage,
    RegistrerPage,
    AgendaPage,
    ProfesionalPage,
    ClinicasPage,
    ComunidadPage,
    ConsultaAutomaticaPage,
    FarmaciasPage,
    MapsPage,
    RecetaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
