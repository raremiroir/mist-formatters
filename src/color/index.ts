import { formatHEX, type ColorFormatHex } from "./hex"
import { formatHSL, type ColorFormatHsl } from "./hsl"
import { formatRGB, type ColorFormatRgb } from "./rgb"

export const formatColor = {
   rgb: {
      to: {
         hex: (rgb: ColorFormatRgb) => formatRGB.toHex(rgb),
         hsl: (rgb: ColorFormatRgb) => formatHEX.toHsl(formatRGB.toHex(rgb)),
         rawString: (rgb: ColorFormatRgb) => formatRGB.toRawString(rgb)
      },
      from: {
         hex: (hex: ColorFormatHex) => formatHEX.toRgb(hex),
         hsl: (hsl: ColorFormatHsl) => formatHEX.toRgb(formatHSL.toHex(hsl))
      }
   },
   hex: {
      to: {
         rgb: (hex: ColorFormatHex) => formatHEX.toRgb(hex),
         hsl: (hex: ColorFormatHex) => formatHEX.toHsl(hex)
      },
      from: {
         rgb: (rgb: ColorFormatRgb) => formatRGB.toHex(rgb),
         hsl: (hsl: ColorFormatHsl) => formatHSL.toHex(hsl)
      }
   },
   hsl: {
      to: {
         rgb: (hsl: ColorFormatHsl) => formatHEX.toRgb(formatHSL.toHex(hsl)),
         hex: (hsl: ColorFormatHsl) => formatHSL.toHex(hsl)
      },
      from: {
         rgb: (rgb: ColorFormatRgb) => formatHEX.toHsl(formatRGB.toHex(rgb)),
         hex: (hex: ColorFormatHex) => formatHEX.toHsl(hex)
      }
   }
}