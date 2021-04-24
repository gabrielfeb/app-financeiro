import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotacaoPageRoutingModule } from './cotacao-routing.module';

import { CotacaoPage } from './cotacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotacaoPageRoutingModule
  ],
  declarations: [CotacaoPage]
})
export class CotacaoPageModule {}
