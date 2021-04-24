import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotacaoPage } from './cotacao.page';

const routes: Routes = [
  {
    path: '',
    component: CotacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CotacaoPageRoutingModule {}
