import { formatDate } from "./date";
import { DateTimeFormat, DateTimeFormatType } from "./datetime";
import { formatTime } from "./time";

export const formatDT = {
   type: {
      digOrNum: (type: DateTimeFormatType) => {
         return type === '2-digit' || type === 'short' || type === 'narrow' ? '2-digit' : 'numeric';
      },
   },
   now: {
      locale: (options: DateTimeFormat['options']) => {
         let locale = options.locale?? 'nl-BE';
         let type = options.type?? 'short';
         const { year, month, day } = formatDate.now.locale({ locale, type});
         const { hour, minute, second } = formatTime.now.locale({ locale, type});
         return { year, month, day, hour, minute, second };
      },
      iso: (options: DateTimeFormat['options']) => {
         let locale = options.locale?? 'nl-BE';
         let type = options.type?? 'short';
         const { year, month, day, hour, minute, second } = formatDT.now.locale({ locale, type});
         return `${year}-${month}-${day}T${hour}:${minute}:${second}`;
      },
      timestamp: (options: DateTimeFormat['options']) => {
         let locale = options.locale?? 'nl-BE';
         let type = options.type?? 'short';
         const { year, month, day, hour, minute, second } = formatDT.now.locale({ locale, type});
         return `${year}${month}${day}${hour}${minute}${second}`;
      },
      
   },
   
   date: {
      now: (options: DateTimeFormat['options']) => formatDate.now.locale(options),
   },
   time: {
      now: (options: DateTimeFormat['options']) => formatTime.now.locale(options),
   }
}