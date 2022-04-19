import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'tri'
})
export class TriPipe implements PipeTransform {


  transform(values: Car[], type:string, order: string): Car[] {
    
    if(type === 'date'){
      if (order === 'DESC') {
        return values.sort((a: Car, b: Car) => b.issuance - a.issuance);
      } else {
        return values.sort((a: Car, b: Car) => a.issuance - b.issuance);
      }
    } else if (type === 'prix') {
      if (order === 'DESC') {
        return values.sort((a: Car, b: Car) => b.price - a.price);
      } else {
        return values.sort((a: Car, b: Car) => a.price - b.price);
      }
    } else {
      return values;
    }

  }
}
