import type { ColorFormatRgb } from "./color.d.ts";

export const formatRGB = {
   // (0, 0, 0) => #000000
   toHex: (rgb: ColorFormatRgb) => {
      const {r, g, b} = rgb;
      return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
   },
   //  (0, 0, 0) => `0, 0, 0`
   toRawString: (rgb: ColorFormatRgb) => {
      const {r, g, b} = rgb;
      return `${r}, ${g}, ${b}`;
   }
}