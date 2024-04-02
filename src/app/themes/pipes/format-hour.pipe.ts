import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatHour',
})

export class FormatHourPipe implements PipeTransform {
  transform(date: string, ...args: unknown[]): unknown {
    return moment(date).format("HH:mmч.")
  }
}