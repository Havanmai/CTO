import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textDate'
})
export class TextDatePipe implements PipeTransform {
    transform(value: string): string {
     /*  let date = new Date(value);
      return date.toLocaleString(); */
    let date = new Date(value);
    let dateText = date.toISOString().substring(0, 10);
    let timeTexthour = date.toTimeString().substring(0, 2);
    let timeTextminis = date.toTimeString().substring(3, 5);
    let timeText = timeTexthour.concat('h',timeTextminis );
    return dateText.concat(' : ',timeText );
    }


}
