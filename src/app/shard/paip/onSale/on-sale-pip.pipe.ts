import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSalePIP',
  standalone: true
})
export class OnSalePIPPipe implements PipeTransform {

  transform(pTitle:string): string {
    return `onSale :${pTitle}`
  }

}
