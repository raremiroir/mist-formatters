import type { ColorFormatHex, ColorFormatRgb } from "./color.js";

export declare module formatRGB {
   export declare function toHex (rgb: ColorFormatRgb): ColorFormatHex;       // (0, 0, 0) => #000000
   export declare function toRawString (rgb: ColorFormatRgb): string; //  (0, 0, 0) => `0, 0, 0`
}