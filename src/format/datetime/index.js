import { formatDateNowLocale } from "./date";
import { formatTimeNowLocale } from "./time";

export const formatDateTime = {
   type: {
      digOrNum: (type) => {
         return type === '2-digit' || type === 'short' || type === 'narrow' ? '2-digit' : 'numeric';
      },
   },
   now: {
      locale: (options) => {
         let locale = options.locale?? 'nl-BE';
         let type = options.type?? 'short';
         const { year, month, day } = formatDateNowLocale({ locale, type});
         const { hour, minute, second } = formatTimeNowLocale({ locale, type});
         return { year, month, day, hour, minute, second };
      },
      iso: (options) => {
         let locale = options.locale?? 'nl-BE';
         let type = options.type?? 'short';
         const { year, month, day, hour, minute, second } = formatDateTime.now.locale({ locale, type});
         return `${year}-${month}-${day}T${hour}:${minute}:${second}`;
      },
      timestamp: (options) => {
         let locale = options.locale?? 'nl-BE';
         let type = options.type?? 'short';
         const { year, month, day, hour, minute, second } = formatDateTime.now.locale({ locale, type});
         return `${year}${month}${day}${hour}${minute}${second}`;
      },
      
   },
   
   date: {
      now: (options) => formatDateNowLocale(options),
   },
   time: {
      now: (options) => formatTimeNowLocale(options),
   }
}