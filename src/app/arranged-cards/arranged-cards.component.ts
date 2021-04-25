import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-arranged-cards',
    templateUrl: './arranged-cards.component.html',
    styleUrls: ['./arranged-cards.component.css']
})
export class ArrangedCardsComponent implements OnInit {

    @Input() cards: any;
    @Input() skip: number;
    display: any[] = [];

    check: number = 0;
    innerCheck = 0;
    isSkipped:boolean = false; 

    constructor() { }

    ngOnInit(): void {
        this.arrangeCards(this);
    }

    arrangeCards(that) {
        console.table("Cards", this.cards);
        console.table("Display", this.display);

        setTimeout(() => {
            for (let i: number = 0; i < this.cards.length; i++) {

                //Remove first card
                if (this.check == 1) {
                    this.display.push(this.cards[0].value);
                    for (let j: number = 0; j < this.cards.length; j++) {
                        var temp;
                        if (j == 0) {
                            temp = this.cards[0];
                        }
                        if (j + 1 == this.cards.length) {
                            this.cards[j] = temp;
                        } else {
                            this.cards[j] = this.cards[j + 1];
                        }
                    }
                    this.cards.pop();
                    this.check--;
                    this.innerCheck = 0;
                    this.isSkipped = false;
                    break;   
                }


                //Move skip card ahead
                if (this.check == 0) {
                    for (let j: number = 0; j < this.cards.length; j++) {
                        var temp;
                        if (j == 0) {
                            temp = this.cards[0];
                        }
                        if (j + 1 == this.cards.length) {
                            this.cards[j] = temp;
                        } else {
                            this.cards[j] = this.cards[j + 1];
                        }
                    }
                    this.innerCheck = this.innerCheck + 1;

                    if (this.innerCheck == this.skip) {
                        this.check = 1;
                    }
                    this.isSkipped = true;
                    break;
                }


            }
            if (this.cards.length > 0) {
                this.arrangeCards(that);
            }
        }, 3000);
    }

}
