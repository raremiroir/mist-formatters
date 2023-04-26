import { formatChars } from "./chars";
import { CharsLocales } from "./chars/chars";
import { textCapitalize } from "./core";
import { formatPrice } from "./price";
import { formatSlug } from "./url";

export const formatText = {
   capitalize: textCapitalize,
   url: {
      slug: (str: string, locale:CharsLocales) => formatSlug(str, locale),
   },
   price: (num:number) => formatPrice(num),
   chars: formatChars,
}