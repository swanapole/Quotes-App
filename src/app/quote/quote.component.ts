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


  constructor() { }

  ngOnInit() {

  }
  ngOnDestroy(){
    clearInterval(this.timer);
  }
}
