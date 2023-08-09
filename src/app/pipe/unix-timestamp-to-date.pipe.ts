import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixTimestampToDate'
})
export class UnixTimestampToDatePipe implements PipeTransform {

  transform(unixTimestamp: number): string {
    const date = new Date(unixTimestamp * 1000); // Convert to milliseconds.
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'pm' : 'am';
    return `${hours}:${minutes} ${ampm}`; // Return the time in "hh:mm AM/PM" format.
  }
  
}
