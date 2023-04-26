import { ColorFormatHex, ColorFormatHsl, ColorFormatRgb } from "./color";

export declare module formatHEX {
   // #123456 => {r: 18, g: 52, b: 86}
   export declare function toRgb(hex:ColorFormatHex): ColorFormatRgb;
   // #123456 => {h: 210, s: 72, l: 20}
   export declare function toHsl(hex:ColorFormatHex): ColorFormatHsl;
}