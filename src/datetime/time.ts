import { formatDateTime } from ".";
import { DateTimeFormat } from "./datetime";

export const formatTime = {
   now: {
      locale: (options: DateTimeFormat['options']) => {
         let locale = options.locale?? 'nl-BE';
         let type = options.type?? 'short';
         const hour = new Date().toLocaleTimeString(locale, { hour: formatDateTime.type.digOrNum(type) });
         const minute = new Date().toLocaleTimeString(locale, { minute: formatDateTime.type.digOrNum(type) });
         const second = new Date().toLocaleTimeString(locale, { second: formatDateTime.type.digOrNum(type) });
         return {hour, minute, second};
      }
   }
}

export default formatTime;