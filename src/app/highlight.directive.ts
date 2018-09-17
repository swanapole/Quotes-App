import { Directive,HostListener,Input,ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
 @Input("appHighlight") highest:boolean;
  constructor(private elem:ElementRef) {
}
  @HostListener('change') ngOnChanges(){
    if(this.highest){
      this.elem.nativeElement.style.backgroundColor='#444';
      this.elem.nativeElement.style.color='#000';
    }
    else{
      this.elem.nativeElement.style.backgroundColor='#082845';
      this.elem.nativeElement.style.color='#fff';
    }
  }
    ngOnInit(){

    }
  }
