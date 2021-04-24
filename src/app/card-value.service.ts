import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardValueService {

  constructor() {}

  private card = [];

  public getCard() {
    return this.card;
  }
  
  public addToCardList(value: any) {
    this.card.push(value);
  }

  public changeValueForCard(num : number, value: string) {

    for(let i =0 ; i< this.card.length ; i++)
    if(i === num) {
      this.card[i].value = value;
    }
    
  }

}
