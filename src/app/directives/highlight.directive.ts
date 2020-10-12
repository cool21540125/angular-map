// 屬性型 Directive
// 2020/10/12
// ng g d directives/highlight
// Usage:
//    <p appHighlight>Highlight me!</p>
// https://ithelp.ithome.com.tw/articles/10204799
// https://stackblitz.com/angular/oyxegkypngdb?file=src%2Fapp%2Fhighlight.directive.ts
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}
