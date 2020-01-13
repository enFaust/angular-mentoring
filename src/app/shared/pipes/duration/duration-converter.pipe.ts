import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'durationConverter'
})
export class DurationConverterPipe implements PipeTransform {

  transform(duration: number): any {
    const hours = Math.trunc(duration / 60);
    const minutes = Math.trunc(duration % 60);

    if (hours == 0) {
      return minutes + ' min';
    }
    if (minutes == 0) {
      return hours + ' h';
    }
    return hours + ' h ' + minutes + ' min';
  }

}
