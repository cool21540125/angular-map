// 結構型 Directives, 懶得看了= =
// 2020/10/12
// ng g d directives/unless
// Usage:
//    <p *appUnless="condition" class="unless a">aa<p>
//    <p *appUnless="!condition" class="unless b">bb</p>
// https://ithelp.ithome.com.tw/articles/10204799
// https://stackblitz.com/angular/aaajyellbknr?file=src%2Fapp%2Funless.directive.ts
import { Directive } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor() { }

}
