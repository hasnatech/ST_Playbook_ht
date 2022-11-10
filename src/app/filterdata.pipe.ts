import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(!value)return null;
    if(!args || args.toLowerCase() == 'all')return value;

    args = args.toLowerCase();
    return value.filter(function(item){
      return (item.title.charAt(0).toLowerCase() == args.toLowerCase());
      //return false;
      //return JSON.stringify(item).toLowerCase().includes(args);
      //return item.user.email.toLowerCase().includes(args);
  });
  }

}
