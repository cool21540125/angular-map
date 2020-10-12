import { Pipe, PipeTransform } from '@angular/core';

// 不知道為啥, 非得加上 pure: false 才有效
@Pipe({ name: 'reverse', pure: false })
export class ReversePipe implements PipeTransform {
  transform(value) {
    return value.slice().reverse();
  }
}
