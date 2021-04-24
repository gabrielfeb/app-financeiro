import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'transferencia',
  templateUrl: 'transferencia.page.html',
  styleUrls: ['transferencia.page.scss']
})
export class TransferenciaPage {

public cash = 0.00;
public transfer = 0

public decrement (){
  this.cash -=this.transfer;
}

}

