import { ColorFormatHex } from "./hex";

export interface ColorFormatRgb {
   r: number,
   g: number,
   b: number
}

export const formatRGB = {
   toHex: (rgb: ColorFormatRgb ): ColorFormatHex => { // (0, 0, 0) => #000000
      const {r, g, b} = rgb;
      return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
   },
   toRawString: (rgb: ColorFormatRgb): string => { //  (0, 0, 0) => `0, 0, 0`
      const {r, g, b} = rgb;
      return `${r}, ${g}, ${b}`;
   }
}