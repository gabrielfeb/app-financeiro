import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  // Abaixo esta o routing para as paginas, conforme tabs criadas //
  /*{
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
    loadChildren: () => import('./dadosconta/dadosconta.module').then( m => m.DadosContaPageModule)
  },
  {
    path: 'faleconosco',
    loadChildren: () => import('./faleconosco/faleconosco.module').then( m => m.FaleConoscoPageModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }