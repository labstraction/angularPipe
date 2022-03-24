import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByNumber'
})
export class OrderByNumberPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): any[] {
    if(args[0]){
      const propertyName = args[0]
      const firstElement = value[0]
      if (typeof firstElement[propertyName] === "number") {
        return value.sort((a, b) => a[propertyName] - b[propertyName])
      } else {
        return value;
      }
    } else {
      return value;
    }
    
  }

}
