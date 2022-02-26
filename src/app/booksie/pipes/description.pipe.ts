import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
})
export class DescriptionPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (value) {
      return `${value.substring(0, limit)}...`;
    } else {
      return '';
    }
  }
}
