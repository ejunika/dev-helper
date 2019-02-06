import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'glanceValue',
})
export class GlanceValuePipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {}
  transform(value: any, args?: any): any {
    let output: string = '';
    if (!value) return output;
    if (value.fix) {
      if (value.pre) {
        output += value.fix + this.decimalPipe.transform(value.count);
      } else {
        output += this.decimalPipe.transform(value.count) + value.fix;
      }
    } else {
      return output;
    }
    return output;
  }
}
