import { formatChars } from "../../../src/format/text/chars";

export const formatSlug = (str: string, locale: 'nl'|'en'|'fr') => {

   str = formatChars.remove.define(str, [
      '(', ')', '{', '}', '[', ']', 
      '/', '\\', 
      '\'', '"', '“', '”', '‘', '’', '`', '⁗', '′', '″', '‴',
      ',', '.', ';', ':', '«', '»',
      '~', '?', '!', '¡', '¿', '‽', '⁈', '⁉',
      ':', '*', '^', '¤', '¶', '§', '†', '‡', '•', '·', '‣', '▪', '▫', '�',
      '‰', '‱', '⁕', '⁂', '⁑', '⁀', '⁅', '⁆', '⁌', '⁍', '⁏', '⁐', '⁎', '⁓', 
      '⁖', '⁘', '⁙', '⁚', '⁛', '⁜', '⁝', '⁞',
   ])

   // Define characters to replace with single character
   str = formatChars.replace.normalize(str);
   // Define characters to replace with multiple characters
   str = formatChars.replace.define({ str, locale })

   str = str.replace(/\s+/g, '-');  // Replace multiple spaces with -
   str = str.replace(/_+/g, '-');   // Replace _ with -
   str = str.replace(/-+/g, '-');   // Replace multiple - with single -
   str = str.replace(/^-+/, '');    // Remove - from start of text
   str = str.replace(/-+$/, '');    // Remove - from end of text

   return str;
}