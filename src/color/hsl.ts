import { ColorFormatHex } from "./hex";

export interface ColorFormatHsl {
   h: number,
   s: number,
   l: number
}

export const formatHSL = {
   // (0, 0, 0) => #000000
   toHex: (hsl: ColorFormatHsl): ColorFormatHex => {
      let {h, s, l} = hsl;
      l /= 100;
      const a = s * Math.min(l, 1 - l) / 100;
      const f = (n:number) => {
         const k = (n + h / 30) % 12;
         const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
         return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
      };
      return `#${f(0)}${f(8)}${f(4)}`;
   }
}