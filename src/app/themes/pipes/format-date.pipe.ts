import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatDate',
})

export class FormatDatePipe implements PipeTransform {
  transform(date: string, ...args: unknown[]): unknown {
    return moment(date).format("DD.MM.YYYYг.")
  }
}