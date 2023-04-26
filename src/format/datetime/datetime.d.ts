export type DateTimeFormatType = '2-digit'|'numeric'|'long'|'narrow'|'short';

export interface DateTimeFormat {
   options: {
      locale?: string;
      type?: DateTimeFormatType;
   }
}