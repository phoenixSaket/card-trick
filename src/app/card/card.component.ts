import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardValueService } from '../card-value.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Output() openSlideout: EventEmitter<any> = new EventEmitter();
  @Input() number: number;
  @Input() card: any;


  constructor(private service: CardValueService) { }

  ngOnInit(): void {

  }

  showSlideout(event) {
    let data = { number: this.number, show: true }
    this.openSlideout.emit(data);
  }

  


}
