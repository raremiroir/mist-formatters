import { formatText } from './src/format/text';
import { formatDT } from './src/format/datetime';
import { formatColor } from './src/format/color';

// All formatters
export const mFormat = {
   text: formatText,
   datetime: formatDT,
   color: formatColor,
}

// Text formatters
export { formatText } from './src/format/text';
// Date formatters
export { formatDT as formatDateTime } from './src/format/datetime';
// Color formatters
export { formatColor } from './src/format/color';

export default mFormat;