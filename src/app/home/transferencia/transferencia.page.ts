import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'transferencia',
  templateUrl: 'transferencia.page.html',
  styleUrls: ['transferencia.page.scss']
})
export class TransferenciaPage {

public cash = 10000;
public transfer = 0;
public conta = ''

public decrement (){
  this.cash -=this.transfer;
}

constructor(private alertCtrl: AlertController) { }

ngOnInit() {
}
async showAlerta(){
  const alerta = await this.alertCtrl.create({
    header: 'TRANSFERÊNCIA REALIZADA COM SUCESSO',
    message:'SEU DINHEIRO SERÁ ENVIADO EM ATÉ 24H',
    buttons:['OK']
  });

  alerta.present();
}
}


