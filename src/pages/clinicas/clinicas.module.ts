import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClinicasPage } from './clinicas';

@NgModule({
  declarations: [
    ClinicasPage,
  ],
  imports: [
    IonicPageModule.forChild(ClinicasPage),
  ],
})
export class ClinicasPageModule {}
