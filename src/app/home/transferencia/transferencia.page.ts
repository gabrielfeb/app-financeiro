import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

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

}

