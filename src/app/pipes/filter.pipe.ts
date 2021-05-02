import { HeroArray } from './../heroInterface';
// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {

  transform(heroObj: HeroArray[], searchTerm: string): HeroArray[] {
     if (!heroObj || !searchTerm) {
       return heroObj;
     }
     return heroObj.filter( HeroArray =>
    HeroArray.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    // searchText = searchText.toLocaleLowerCase();

    // return items.filter(it => {
    //   return it.toLocaleLowerCase().includes(searchText);
    // });
  }
}
