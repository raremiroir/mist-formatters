import { formatDT } from ".";
import { DateTimeFormat, DateTimeFormatType } from "./datetime";

export const formatTime = {
   now: {
      locale: (options: DateTimeFormat['options']) => {
         let locale = options.locale?? 'nl-BE';
         let type = options.type?? 'short';
         const hour = new Date().toLocaleTimeString(options.locale, { hour: formatDT.type.digOrNum(type) });
         const minute = new Date().toLocaleTimeString(options.locale, { minute: formatDT.type.digOrNum(type) });
         const second = new Date().toLocaleTimeString(options.locale, { second: formatDT.type.digOrNum(type) });
         return {hour, minute, second};
      }

   }
}