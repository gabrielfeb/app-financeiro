import { Component, AfterContentInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.page.html',
  styleUrls: ['./cotacao.page.scss'],
})
export class CotacaoPage implements AfterContentInit, OnInit {

  public countdown;
  public countdownValue;
  public selectedCurrency;
  public currencyInfo = {
    initials : [
      'USD-BRL',
      'EUR-BRL',
      'GBP-BRL',
      'JPY-BRL'
    ],
    symbols : {
      'EUR' : '€',
      'USD' : '$',
      'GBP' : '£',
      'JPY' : '¥'
    },
    translated : {
      'EUR' : 'Euro',
      'USD' : 'Dólar',
      'GBP' : 'Libra',
      'JPY' : 'Iene'
    }
  };
  public currencies = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUpdatedCurrency();
  }

  ngAfterContentInit() {
    
  }

  public selectCurrency(event) {

    let value;

    if(event) {
      value = event.target.value;
      this.selectedCurrency = value;
    } else {
      value = this.selectedCurrency;
    }
    
    document.querySelector('#quote-name').textContent = this.currencyInfo.translated[value];

    var quote = this.currencies[value + 'BRL'].ask;
    quote = parseFloat(quote).toFixed(2);
    document.querySelector('#quote').textContent = this.currencyInfo.symbols[value]+ ' ' + quote.toString().replace('.', ',');
  }

  public setCurrencies(currency) {
    this.currencies = currency;
    this.selectCurrency(null);
  }

  public updateCurrency() {
    this.getUpdatedCurrency();
  }

  async getUpdatedCurrency() {
    const url = 'https://economia.awesomeapi.com.br/json/last/' + this.currencyInfo.initials.join(',');
    await this.http.get(url).toPromise().then((currency) => {
      this.setCurrencies(currency);
    });
  }

}
