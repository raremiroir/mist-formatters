import { formatHEX } from "./hex"
import { formatHSL } from "./hsl"
import { formatRGB } from "./rgb"

export const formatColor = {
   rgb: {
      to: {
         hex: (rgb) => formatRGB.toHex(rgb),
         hsl: (rgb) => formatHEX.toHsl(formatRGB.toHex(rgb)),
         rawString: (rgb) => formatRGB.toRawString(rgb)
      },
      from: {
         hex: (hex) => formatHEX.toRgb(hex),
         hsl: (hsl) => formatHEX.toRgb(formatHSL.toHex(hsl))
      }
   },
   hex: {
      to: {
         rgb: (hex) => formatHEX.toRgb(hex),
         hsl: (hex) => formatHEX.toHsl(hex)
      },
      from: {
         rgb: (rgb) => formatRGB.toHex(rgb),
         hsl: (hsl) => formatHSL.toHex(hsl)
      }
   },
   hsl: {
      to: {
         rgb: (hsl) => formatHEX.toRgb(formatHSL.toHex(hsl)),
         hex: (hsl) => formatHSL.toHex(hsl)
      },
      from: {
         rgb: (rgb) => formatHEX.toHsl(formatRGB.toHex(rgb)),
         hex: (hex) => formatHEX.toHsl(hex)
      }
   }
}