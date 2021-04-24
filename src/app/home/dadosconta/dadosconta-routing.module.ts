import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadoscontaPage } from './dadosconta.page';

const routes: Routes = [
  {
    path: '',
    component: DadoscontaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadoscontaPageRoutingModule {}
