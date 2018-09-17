import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isDelete = new EventEmitter<boolean>();
  @Output() vote = new EventEmitter<boolean>();
  deleteQuote(erase:boolean){
    this.isDelete.emit(erase);
  }

  addVote(voteCount:boolean){
    this.vote.emit(voteCount);
  }
  constructor() { }

  ngOnInit() {
  }

}
