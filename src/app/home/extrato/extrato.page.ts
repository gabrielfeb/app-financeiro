import { Component, OnInit, ViewChild} from '@angular/core';
import { IonInfiniteScroll} from '@ionic/angular';
import { R3TargetBinder } from '@angular/compiler';



@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.page.html',
  styleUrls: ['./extrato.page.scss'],
})
export class ExtratoPage implements OnInit {

  constructor() {
    this.addMoreItems();
   }

  ngOnInit() {
  }

  items = [];

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

    loadData(event) {
      setTimeout(() => {
        console.log('Done');
        event.target.complete();
        this.addMoreItems();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.addMoreItems.length == 12) {
          event.target.disabled = true;
        }
      }, 50);
    }

    addMoreItems (){
      for (let i = 1; i <= 12; i++){
        if (i = 1){
          this.items.push('Janeiro');
        } 
        if(i = 2){
          this.items.push('Fevereiro')
        }
        if(i = 3){
          this.items.push('Março')
        }
        if(i = 4){
          this.items.push('Abril')
        }
        if(i = 5){
          this.items.push('Maio')
        }
        if(i = 6){
          this.items.push('Junho')
        }
        if(i = 7){
          this.items.push('Julho')
        }
        if(i = 8){
          this.items.push('Agosto')
        }
        if(i = 9){
          this.items.push('Setembro')
        }
        if(i = 10){
          this.items.push('Outubro')
        }
        if(i = 11){
          this.items.push('Novembro')
        }
        if(i = 12){
          this.items.push('Dezembro')
        }
      }

  }

}



