import { Component, OnInit,OnDestroy } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  private timer:number;
  private id:number=0;
  quotes:Quote[]= [];

  quoteDelete(isDelete,index){
    if(isDelete){
      let toDelete = confirm(`Are you sure you want to delete this quote?`);
      if(toDelete){
        this.quotes.splice(index, 1);
        this.getHighest();
      }
    }
  }

  postNewQuote(quote){
    this.id+=1;
    quote.id = this.id;
    this.timer=setInterval(()=>{
        quote.time+=1;
    },1000);
    this.quotes.push(quote);
  }

  voteAdd(vote,index){
    if(vote){
      this.quotes[index].upVote += 1;
      this.getHighest();
    } else {
      this.quotes[index].downVote += 1;
    }
  }

  constructor() { }

  ngOnInit() {

  }
  ngOnDestroy(){
    clearInterval(this.timer);
  }
}
