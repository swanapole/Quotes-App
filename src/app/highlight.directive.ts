import { Directive,HostListener,Input,ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
 @Input("appHighlight") highest:boolean;
  constructor(private elem:ElementRef) {
}
  
    ngOnInit(){

    }
  }
