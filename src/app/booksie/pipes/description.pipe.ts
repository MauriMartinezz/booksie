import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
})
export class DescriptionPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    return `${value.substring(0, limit)}...`;
  }
}
