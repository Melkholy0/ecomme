import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../interfaces/product';

@Pipe({
  name: 'serch',
  standalone: true
})
export class SerchPipe implements PipeTransform {
  transform(proudect:Product[],jfdfd:string): Product[]
  {
    return proudect.filter((prod=>prod.title.toLowerCase() .includes(jfdfd.toLowerCase()))
  )
  }






    
  }


