import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCounter'
})
export class TimeCounterPipe implements PipeTransform {

  transform(value: any): any {
    let days,hours,minutes;
    if(value <= 59){
      return `a few seconds ago`;
    }
    else if(value >= 60 && value <= 3599){
      minutes = Math.round(value/60);
      if(minutes == 1){
        return `${minutes} minute ago`;
      }else{
        return `${minutes} minutes ago`;
      }
    }else{
      hours = Math.round(value/3600);
      if(hours == 1){
        return `${hours} hour ago`;
      }else{
        return `${hours} hours ago`;
      }
    }
  }
}
