export const formatHEX = {
   // #123456 => {r: 18, g: 52, b: 86}
   toRgb: (hex) => {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });
    
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 0, g: 0, b: 0 };
   },
   
   // #123456 => {h: 210, s: 72, l: 20}
   toHsl: (hex) => {
      const rgb = formatHEX.toRgb(hex);
      const r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h, s, l = (max + min) / 2;
    
      if(max == min) {
         h = s = 0; // achromatic
      } else {
         const d = max - min;
         s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        
         switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
         }
         h /= 6;
      }
      return {h: h * 360, s: s * 100, l: l * 100};
   },
}