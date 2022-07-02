import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loaihh'
})
export class LoaihhPipe implements PipeTransform {

  transform(value: string): string {
    let hanghoa;
    switch (value){
      case 'HH':
        hanghoa='Hàng';
        break;
      case 'TH':
        hanghoa='Thư';
        break;
      case 'KH':
        hanghoa='Kiện';
        break;

        default:
          hanghoa='-';
        break;
    }

    return hanghoa;
  }

}
