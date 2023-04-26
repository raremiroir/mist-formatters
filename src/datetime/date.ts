import { formatDateTime } from ".";
import { DateTimeFormat } from "./datetime";

export const formatDate = {
   now: {
      locale: (options: DateTimeFormat['options']) => {
         let locale = options.locale?? 'nl-BE';
         let type = options.type?? 'short';
         const year = new Date().toLocaleDateString(options.locale, { year: formatDateTime.type.digOrNum(type) });
         const month = new Date().toLocaleDateString(options.locale, { month: type });
         const day = new Date().toLocaleDateString(options.locale, { day: formatDateTime.type.digOrNum(type) });
         return {year, month, day};
      }
   }
}