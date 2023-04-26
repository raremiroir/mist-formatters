export interface ColorFormatRgb {
   r: number,
   g: number,
   b: number
}
export type ColorFormatHex = string;

export interface ColorFormatHsl {
   h: number,
   s: number,
   l: number
}

export interface ColorFormat {
   rgb: ColorFormatRgb;
   hex: ColorFormatHex;
   hsl: ColorFormatHsl;
}

export declare module formatColor {
   export const rgb = {
      to: {
         hex: (rgb: ColorFormatRgb) => ColorFormatHex,
         hsl: (rgb: ColorFormatRgb) => ColorFormatHsl,
         rawString: (rgb: ColorFormatRgb) => string,
      },
      from: {
         hex: (hex: string) => ColorFormatRgb,
         hsl: (hsl: string) => ColorFormatRgb,
      },
   }
   export const hex = {
      to: {
         rgb: (hex: ColorFormatHex) => ColorFormatRgb,
         hsl: (hex: ColorFormatHex) => ColorFormatHsl,
      },
      from: {
         rgb: (rgb: ColorFormatRgb) => ColorFormatHex,
         hsl: (hsl: string) => ColorFormatHex,
      },
   }
   export const hsl = {
      to: {
         rgb: (hsl: ColorFormatHsl) => ColorFormatRgb,
         hex: (hsl: ColorFormatHsl) => ColorFormatHex,
      },
      from: {
         rgb: (rgb: ColorFormatRgb) => ColorFormatHsl,
         hex: (hex: string) => ColorFormatHsl,
      },
   }
}