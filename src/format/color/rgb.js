
export const formatRGB = {
   toHex: (rgb) => { // (0, 0, 0) => #000000
      const {r, g, b} = rgb;
      return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
   },
   toRawString: (rgb) => { //  (0, 0, 0) => `0, 0, 0`
      const {r, g, b} = rgb;
      return `${r}, ${g}, ${b}`;
   }
}