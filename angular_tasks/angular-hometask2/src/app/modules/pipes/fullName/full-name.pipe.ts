import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FullNamE'
})
export class FullNamePipe implements PipeTransform {

  transform(firstname:string,lastname:string): string {
    return firstname+' '+lastname;
  }

}
