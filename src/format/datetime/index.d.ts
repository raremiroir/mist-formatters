import { DateTimeFormat, DateTimeFormatType } from "./datetime";

export declare module formatDateTime {
   export interface type {
      digOrNum: (options: DateTimeFormatType) => string;
   }
   export interface now {
      locale: (options: DateTimeFormat['options']) => {
         year: string;
         month: string;
         day: string;
         hour: string;
         minute: string;
         second: string;
      };
      iso: (options: DateTimeFormat['options']) => string;
      timestamp: (options: DateTimeFormat['options']) => string;
   }
   export interface date {
      now: (options: DateTimeFormat['options']) => {
         year: string;
         month: string;
         day: string;
      }
   }
   export interface time {
      now: (options: DateTimeFormat['options']) => {
         hour: string;
         minute: string;
         second: string;
      }
   }
}