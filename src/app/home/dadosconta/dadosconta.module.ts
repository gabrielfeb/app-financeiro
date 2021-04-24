import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadoscontaPageRoutingModule } from './dadosconta-routing.module';

import { DadoscontaPage } from './dadosconta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadoscontaPageRoutingModule
  ],
  declarations: [DadoscontaPage]
})
export class DadoscontaPageModule {}
