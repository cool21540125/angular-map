// https://stackblitz.com/angular/xoqoqrqbdpm?file=src%2Fapp%2Fexponential-strength.pipe.ts
// 2020/10/12
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {
  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }
}
