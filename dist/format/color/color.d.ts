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