import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-faleconosco',
  templateUrl: './faleconosco.page.html',
  styleUrls: ['./faleconosco.page.scss'],
})
export class FaleconoscoPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async showAlerta(){
    const alerta = await this.alertCtrl.create({
      header: 'MENSAGEM ENVIADA',
      message:'Obrigada por nos contatar, Retornaremos o mais breve possível! \n GREEN BANK',
      buttons:['OK']
    });

    alerta.present();
  }
}
