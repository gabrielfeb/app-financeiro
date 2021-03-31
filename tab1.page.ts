import { R3TargetBinder } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  items = [];

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() {
    this.addMoreItems();
  }

    loadData(event) {
      setTimeout(() => {
        console.log('Done');
        event.target.complete();
        this.addMoreItems();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.loadData.length == 1000) {
          event.target.disabled = true;
        }
      }, 500);
    }

    addMoreItems (){
      for (let i = 0; i <= 10; i++){
        this.items.push(i);

      }

  }
}
