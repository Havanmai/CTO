import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number): string {

     let val=value.toString();
    return val.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
