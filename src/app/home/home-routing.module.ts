import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children : [
      {
        path: 'cotacao',
        loadChildren: () => import('./cotacao/cotacao.module').then( m => m.CotacaoPageModule)
      },
      {
        path: 'transferencia',
        loadChildren: () => import('./transferencia/transferencia.module').then( m => m.TransferenciaPageModule)
      },
      {
        path: 'extrato',
        loadChildren: () => import('./extrato/extrato.module').then( m => m.ExtratoPageModule)
      },
      {
        path: 'dadosconta',
        loadChildren: () => import('./dadosconta/dadosconta.module').then( m => m.DadoscontaPageModule)
      },
      {
        path: 'faleconosco',
        loadChildren: () => import('./faleconosco/faleconosco.module').then( m => m.FaleconoscoPageModule)
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
