// Used: https://github.com/radoslawfabisiak/fieldfilter
// License: MIT

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterByField'})
export class FilterByFieldPipe implements PipeTransform {
  transform(products: Array<any>, condition: any): Array<any> {
    return products.filter(product => {
      let isReturn;
      for (let field in condition) {
        if (product[field] === condition[field] || condition[field] === '') {
          isReturn = true;
        } else if (product[field] !== condition[field]) {
          isReturn = false;
          return false;
        }
      }
      if (isReturn) {
        return true;
      }
    });
  }
}
