import { formatDT } from ".";

export const formatTimeNowLocale = (options) => {
   let locale = options.locale?? 'nl-BE';
   let type = options.type?? 'short';
   const hour = new Date().toLocaleTimeString(locale, { hour: formatDT.type.digOrNum(type) });
   const minute = new Date().toLocaleTimeString(locale, { minute: formatDT.type.digOrNum(type) });
   const second = new Date().toLocaleTimeString(locale, { second: formatDT.type.digOrNum(type) });
   return {hour, minute, second};
}