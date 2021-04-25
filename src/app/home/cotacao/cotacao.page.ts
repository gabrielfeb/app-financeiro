import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.page.html',
  styleUrls: ['./cotacao.page.scss'],
})
export class CotacaoPage implements OnInit {

  public countdown;
  constructor() { }

  ngOnInit() {

  }

  ionViewWillLoad() {
    this.countdown = 30;
  }

  public setCountdown() {

  }

}
