import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CardValueService } from './card-value.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'card-trick';
  numberOfCards: number = 5;
  numberOfSkipCards: number = 1;
  invalidNumberOfCards: boolean = false;
  invalidNumberOfSkipCards: boolean = false;
  hasValues: boolean = false;
  showSlideout: boolean = false;

  clubCards: string[] = [];
  heartCards: string[] = [];
  diamondCards: string[] = [];
  spadeCards: string[] = [];
  selectionForCard: number;
  showArrangeButton: boolean = false;
  setNumber: number = 0;
  cardsArranged: boolean = false;
  arrangedCards: any; 


  constructor(public service: CardValueService) { }

  ngOnInit() {
    this.clubCards = this.addCards("C.png");
    this.heartCards = this.addCards("H.png");
    this.diamondCards = this.addCards("D.png");
    this.spadeCards = this.addCards("S.png");
  }

  changeNumberOfCards(cards: any) {
    this.numberOfCards = cards.target.value;
    if (this.numberOfCards < 1) {
      this.invalidNumberOfCards = true;
    } else {
      this.invalidNumberOfCards = false;
    }
  }

  changeNumberOfSkipCards(cards: any) {
    this.numberOfSkipCards = cards.target.value;
    if (this.numberOfSkipCards < 0) {
      this.invalidNumberOfSkipCards = true;
    } else {
      this.invalidNumberOfSkipCards = false;
    }
  }

  createCardList(number: any) {
    let cardArray = [];
    for (let i = 0; i < number; i++) {
      cardArray.push({ value: '', type: '' });
    }
    return cardArray;
  }

  submitValues(event: any) {
    event.preventDefault();
    if (!this.invalidNumberOfCards && !this.invalidNumberOfSkipCards) {
      this.hasValues = true;
      this.createCardList(this.numberOfCards).forEach(element => {
        this.service.addToCardList(element);
      });
    } else {
      this.hasValues = false;
    }
  }

  openSlideout(event: any) {
    this.selectionForCard = event.number;
    this.showSlideout = true;
  }

  hideSlideOut() {
    this.showSlideout = false;
  }

  addCards(type: string) {

    let tempCards = [];

    tempCards.push("assets/cards/A" + type);

    for (let i = 2; i <= 10; i++) {
      tempCards.push("assets/cards/" + i + type);
    }

    tempCards.push("assets/cards/J" + type);
    tempCards.push("assets/cards/Q" + type);
    tempCards.push("assets/cards/K" + type);

    return tempCards;

  }

  cardSelected(card) {
    let check = 0;

    for (let i = 0; i < this.service.getCard().length; i++) {
      if (this.service.getCard()[i].value === card) {
        check = 1;
      }
    }

    if (check !== 1) {
      this.service.changeValueForCard(this.selectionForCard, card)
      this.checkCards();
      this.hideSlideOut();
    }

  }

  checkCards() {
    let check = 0;
    for (let i = 0; i < this.service.getCard().length; i++) {
      if (this.service.getCard()[i].value.length === 0) {
        check = 1;
      }

      if (check === 0) {
        this.showArrangeButton = true;
      } else {
        this.showArrangeButton = false;
      }
    }
  }

  arrangeCards() {

    let skip = this.numberOfSkipCards;
    let totalCards = this.numberOfCards;
    let cards = this.service.getCard();
    let sequence = [];
    for(let i = 0; i< totalCards ; i++) {
      sequence.push("");
    }
    let blank = 0;
    let k = 0;

    for (let i = 0; i < totalCards; i++) {
      
      if(sequence[i] == "") {
        blank++;
      }

      if(blank == skip + 1) {
        sequence[i]=cards[k];
        k++;
        blank = 0;
      }
      
      if (i == totalCards - 1) {
        i = -1;
      }

      if (k == totalCards) {
        break;
      }
    }

    this.cardsArranged = true;
    this.arrangedCards = sequence;
  }

}
