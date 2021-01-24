import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  private intervals = {
    'year': 31536000,
    'month': 2592000,
    'day': 86400,
  };

  transform(value: any, args?: any): any {
    if (value) {
      let seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < this.intervals.day) {
        return 'Created less then a day ago';
      }
      let counter;
      let ago = "Created ";

      Object.entries(this.intervals).forEach(
        ([key, value]) => {
          counter = Math.floor(seconds / value);
          seconds -= counter * value;
          if (seconds < this.intervals.day) {
            ago += "and "
          }
          if (counter > 0) {
            if (counter === 1) {
              ago += counter + ' ' + key + ' ';
            } else {
              ago += counter + ' ' + key + 's ';
            }
          }
        }
      );

      return ago + " ago";
    }
    return value;
  }
}
