import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixTimestampToDateAndTime'
})
export class UnixTimestampToDateAndTimePipe implements PipeTransform {

  transform(unixTimestamp: number): string {
    const date = new Date(unixTimestamp * 1000); // Convert to milliseconds.

    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedTime = `${(hours % 12) || 12}.${minutes}${ampm}`;

    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();

    return `${formattedTime}, ${month} ${day}`;
  }

}
