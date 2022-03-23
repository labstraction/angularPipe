import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'orderUsersByRanking'
})
export class OrderUsersByRankingPipe implements PipeTransform {

  transform(value: User[], ...args: unknown[]): User[] {
    // if(args.length > 0){
    //   let order = args[0]
    //   if (order === "ascending") {
    //     return value.sort((a, b) =>  a.ranking - b.ranking)
    //   } else {
    //     return value.sort((a, b) =>  b.ranking - a.ranking)
    //   }
    // } else {
    //   return value.sort((a, b) =>  a.ranking - b.ranking)
    // }

    return value.sort((a, b) => args[0] === "descending" ? b.ranking - a.ranking : a.ranking - b.ranking)
    
  }

}
