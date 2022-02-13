import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activation',
})
export class ActivationPipe implements PipeTransform {
  transform(deleted: boolean): string {
    return deleted ? 'Activate' : 'Deactivate';
  }
}
