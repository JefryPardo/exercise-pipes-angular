import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activar'
})
export class ActivarPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = false): unknown {
    return ( mostrar ) ? '*'.repeat( value.length ): value;
  }

}
