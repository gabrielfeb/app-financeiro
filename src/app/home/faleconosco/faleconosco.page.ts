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
      message:'O GREEN BANK agradece pelo contato, retornaremos o mais breve possível!',
      buttons:['OK']
    });

    alerta.present();
  }
}
