import { CharsLocales, CharsMap } from "./chars";
import { CHARSLOCALEVARS } from "./charsLocales";

const getDefaultCharsMap = (locale:CharsLocales): CharsMap => {
   return {
      // Rest
      'œ': 'oe', 'æ': 'ae', 'þ': 'th', 'ß': 'ss',
      // Currency
      '€': 'euro', '¥': 'yen', '£': CHARSLOCALEVARS[locale].pound, '$': 'dollar', '¢': 'cent',
      '₽': 'ruble', '₹': 'rupee', '₩': 'won', '₦': 'naira', '₱': 'peso', '₲': 'guarani', '₳': 'austral', '₴': 'hryvnia', '₵': 'cedi',
      // Greek
      'α': 'alpha', 'β': 'beta', 'γ': 'gamma', 'δ': 'delta', 'ζ': 'zeta', 'η': 'eta', 'θ': 'theta', 'ι': 'iota', 'κ': 'kappa', 'λ': 'lambda', 'ξ': 'xi', 'π': 'pi', 'ρ': 'rho', 'σ': 'sigma', 'τ': 'tau', 'φ': 'phi', 'χ': 'chi', 'ψ': 'psi', 'ω': 'omega',
      // Math
      'º': CHARSLOCALEVARS[locale].degree, 
      '+': 'plus', '%': CHARSLOCALEVARS[locale].percent, 
      '<': CHARSLOCALEVARS[locale].less_than, '>': CHARSLOCALEVARS[locale].greater_than,
      '∆': 'delta', '∑': 'sum', '∏': 'product', '∫': 'integral', 
      '√': 'root', '∛': 'cubic-root', '∜': 'quartic-root', '∞': 'infinity', 
      '=': CHARSLOCALEVARS[locale].equals, '≠': CHARSLOCALEVARS[locale].not_equals, '≈': 'almost-equals', '≡': 'identical', 
      '≤': 'less-than-or-equals', '≥': 'greater-than-or-equals',
      '¼': '1-4', '½': '1-2', '¾': '3-4', '⅓': '1-3', '⅔': '2-3', '⅕': '1-5', '⅖': '2-5', '⅗': '3-5', '⅘': '4-5', '⅙': '1-6', '⅚': '5-6', '⅛': '1-8', '⅜': '3-8', '⅝': '5-8', '⅞': '7-8', '⅟': '1-n',
      // Temperature
      '℉': 'fahrenheit', '℃': 'celsius',
      // Business
      '©': 'copyright', '®': CHARSLOCALEVARS[locale].registered, '™': 'trademark', 
      '℠': 'servicemark',  '℗': 'soundmark', 
      '℡': 'tel',  '℁': CHARSLOCALEVARS[locale].address, 
      // Social
      '#': 'hashtag', '@': 'at', 
      // Others
      '&': CHARSLOCALEVARS[locale].and, 
      '℅': 'care',  'ª': CHARSLOCALEVARS[locale].feminine, 
      '№': 'numero', '℀': 'account',
   }
}

export const formatChars = {
   remove: {
      all: (str: string) => {
         return str.replace(/[^a-zA-Z0-9]/g, '');  // Remove all non-alphanumeric characters
      },
      define: (str: string, chars: string[]) => {
         return str.replace(new RegExp(`[${chars.join('')}]`, 'g'), '');
      }
   },
   replace: {
      fromTo: {
         single: (options: {str: string, from: string[], to: string[]}) => {
            let { str, from, to } = options;
            if (from.length !== to.length) throw new Error(`From and to must be of equal length: formatChars.replace.fromTo.single: from.length (${from.length}) !== to.length (${to.length})`)
            var fromStr = from.join('');
            var toStr = to.join('')
            for (var i = 0, l = fromStr.length; i<l; i++) str = str.replace(new RegExp(fromStr.charAt(i), 'g'), toStr.charAt(i));
            return str;
         },
      },
      normalize: (str: string) => {
         return formatChars.replace.fromTo.single({
            str,
            from: [`₀⁰₁¹₂²₃³₄⁴₅⁵₆⁶₇⁷₈⁸₉⁹`, `áàäâăåāąȧã`, `ḃ`, `çćĉčċ`, `ďḋđð`, `éèêëěēęėε`, `ƒḟ`, `ğģǧġĝǥ`, `ĥḣħ`, `ïîíìīįiıİ`, `ĵ`, `ķǩκ`, `ĺľļł₺`, `ṁ`, `ñńŋňņṅⁿ`, `ôóöőòōȯøõο`, `ṗ`, `ŕřṙ`, `śşšșṡŝ`, `ŧţťțṫτ`, `ûúüŭűùůūųυμ`, `ν`, `ŵẇ`, `ẋξ`, `ÿŷýẏ`, `źžżʒǯ`],
            to:   [`00112233445566778899`, `aaaaaaaaaa`, `b`, `ccccc`, `dddd`, `eeeeeeeee`, `ff`, `gggggg`, `hhh`, `iiiiiiiii`, `j`, `kkk`, `lllll`, `ṁ`, `nnnnnnn`, `oooooooooo`, `p`, `rrr`, `ssssss`, `tttttt`, `uuuuuuuuuuu`, `v`, `ww`, `xx`, `yyyy`, `zzzzz`]
         });
      },
      define: (options: {str: string, charsMap?: CharsMap, locale?: CharsLocales}) => {
         const {str, charsMap } = options;
         const locale = options.locale ?? 'en';
         const charsToReplace = charsMap ?? getDefaultCharsMap(locale);
         const regexFromCharsMap = new RegExp(`[${Object.keys(charsToReplace).join('')}]`, 'g');
         return str.replace(regexFromCharsMap, (char) => charsToReplace[char] || char);
      }
   }
}