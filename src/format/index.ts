import { formatColor } from "./color";
import { formatDT } from "./datetime";
import { formatText } from "./text";

export const mFormat = {
   text: formatText,
   datetime: formatDT,
   color: formatColor,
}

export default mFormat;