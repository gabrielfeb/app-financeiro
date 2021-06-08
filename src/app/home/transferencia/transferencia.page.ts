import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular'


@Component({
  selector: 'transferencia',
  templateUrl: 'transferencia.page.html',
  styleUrls: ['transferencia.page.scss']
})
export class TransferenciaPage {

  
  public cash = 0.00;
  public transfer = 0
  public n 
  public c
  public a 
  public b
  public d 
  public e 
  public g



  constructor(public storage: Storage) {
    this.storage.create();
  }

  nome(nome: String){
    this.n = nome;
  }

  conta(conta: String){
    this.c = conta;
  }


  salvar(){
    this.a = this.n
    this.b = this.c
    localStorage.setItem(this.a, this.a)
    localStorage.setItem(this.b, this.b)
  }
  pegar(){
    this.d = 'Nome: ' + localStorage.getItem(this.a)
    this.e = 'Conta: ' + localStorage.getItem(this.b)
    this.g = "Última conta usada"
    console.log( this.d)
    console.log(this.e)
  }

  
  public decrement (variable, variable2, variable3): void{
  this.cash -=this.transfer;
  variable.value = null
  variable2.value = null
  variable3.value = null
  }
}

